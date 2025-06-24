import os
import json
import logging
import uuid
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404
from django.http import JsonResponse, HttpResponse, HttpResponseBadRequest
from django.views.decorators.cache import cache_page
from django.contrib.auth import get_user_model
from rest_framework import status, generics, filters
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from google.oauth2 import id_token
from google.auth.transport import requests as google_auth_requests
import requests as ext_requests
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile  # Correct import for ContentFile
from django.conf import settings
from PIL import Image
from io import BytesIO

from .models import UserProfile
from .serializers import (
    UserRegistrationSerializer,
    UserDetailSerializer,
    UserProfileSerializer,
    UserSearchSerializer,
    PublicProfileDetailSerializer,
)

logger = logging.getLogger(__name__)
User = get_user_model()


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer
    permission_classes = [AllowAny]


class CurrentUserDetailView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserDetailSerializer

    def get_object(self):
        return self.request.user


class MyUserProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        profile, _ = UserProfile.objects.get_or_create(user=self.request.user)
        return profile

    def get_serializer_context(self):
        return {"request": self.request}


@api_view(["POST"])
@permission_classes([AllowAny])
def google_login(request):
    try:
        data = json.loads(request.body)
        token = data.get("access_token")

        idinfo = id_token.verify_oauth2_token(
            token, google_auth_requests.Request(), os.getenv("GOOGLE_CLIENT_ID")
        )

        email = idinfo["email"]
        name = idinfo.get("name", "")
        profile_picture = idinfo.get("picture", None)  # This is the Google URL

        user, created = User.objects.get_or_create(
            email=email, defaults={"name": name, "profile_picture": profile_picture}
        )
        if not created:
            user.name = name
            # Update user's profile_picture with Google URL if it's currently empty,
            # or if the existing one is also a Google URL.
            # This prevents overwriting a locally uploaded image.
            if not user.profile_picture or (
                user.profile_picture and "googleusercontent" in user.profile_picture
            ):
                user.profile_picture = profile_picture
            user.save()

        refresh = RefreshToken.for_user(user)
        return Response(
            {
                "access": str(refresh.access_token),
                "refresh": str(refresh),
            }
        )
    except Exception as e:
        logger.error(f"Google login error: {e}", exc_info=True)
        return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@permission_classes([AllowAny])
def serve_profile_picture(request, user_id):
    user = get_object_or_404(User, id=user_id)
    if not user.profile_picture:
        return HttpResponseBadRequest("No profile picture.")
    if user.profile_picture.startswith("/media/"):
        local_file_path = os.path.join(
            settings.MEDIA_ROOT, user.profile_picture.replace(settings.MEDIA_URL, "")
        )
        if os.path.exists(local_file_path):
            with open(local_file_path, "rb") as f:
                ext = os.path.splitext(local_file_path)[1][1:] or "jpeg"
                return HttpResponse(f.read(), content_type=f"image/{ext}")
        else:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)
    if user.profile_picture.startswith("http"):
        try:
            response = ext_requests.get(user.profile_picture, stream=True, timeout=5)
            response.raise_for_status()
            content_type = response.headers.get("Content-Type", "image/jpeg")
            return HttpResponse(response.content, content_type=content_type)
        except ext_requests.exceptions.RequestException:
            logger.error(
                f"Error fetching external profile picture for user {user.id}: {e}",
                exc_info=True,
            )
            return HttpResponse(status=status.HTTP_503_SERVICE_UNAVAILABLE)
    return HttpResponseBadRequest("Profile picture not found.")


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_profile(request):
    if UserProfile.objects.filter(user=request.user).exists():
        return Response(
            {"detail": "Profile already exists."}, status=status.HTTP_400_BAD_REQUEST
        )
    serializer = UserProfileSerializer(data=request.data, context={"request": request})
    if serializer.is_valid():
        serializer.save(user=request.user, form_completed=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def check_profile(request):
    try:
        profile, created = UserProfile.objects.get_or_create(user=request.user)
        return Response({"form_completed": profile.form_completed})
    except Exception as e:
        logger.error(
            f"Error checking profile status for user {request.user.id}: {e}",
            exc_info=True,
        )
        return Response({"form_completed": False})


class UserPublicProfileView(generics.RetrieveAPIView):
    queryset = UserProfile.objects.select_related("user").all()
    serializer_class = PublicProfileDetailSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = "user__id"
    lookup_url_kwarg = "user_id"


class UserSearchView(generics.ListAPIView):
    queryset = UserProfile.objects.select_related("user").filter(form_completed=True)
    serializer_class = UserSearchSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [filters.SearchFilter]
    search_fields = [
        "user__name",
        "full_name",
        "organization",
        "institution",
        "area_of_expertise",
        "tags",
    ]


class ProfilePictureUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        if "profile_picture" not in request.FILES:
            return Response(
                {"detail": "No image file provided."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        image_file = request.FILES["profile_picture"]
        try:
            img = Image.open(image_file)
            img.verify()
        except Exception:
            return Response(
                {"detail": "Invalid image file."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        try:
            img = Image.open(image_file)
            if img.mode != "RGB":
                img = img.convert("RGB")
            max_size = (800, 800)
            img.thumbnail(max_size, Image.LANCZOS)
            buffer = BytesIO()
            img.save(buffer, format="JPEG", quality=85, optimize=True)
            buffer.seek(0)
            filename = f"profile_{request.user.id}_{uuid.uuid4().hex[:8]}.jpg"
            file_path = default_storage.save(
                f"profile_pics/{filename}",
                ContentFile(
                    buffer.read()
                ),  # Corrected typo: ContentContent -> ContentFile
            )
            profile_picture_url = (
                f"{settings.MEDIA_URL}{file_path}"
                if not file_path.startswith("http")
                else file_path
            )
            request.user.profile_picture = profile_picture_url
            request.user.save()
            return Response(
                {"profile_picture_url": profile_picture_url},
                status=status.HTTP_200_OK,
            )
        except Exception as e:
            logger.error(
                f"Error uploading profile picture for user {request.user.id}: {e}"
            )
            return Response(
                {"detail": f"Failed to upload image: {e}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
