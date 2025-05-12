import os
import json
import logging
import requests
from django.core.exceptions import ValidationError
from django.shortcuts import redirect
from django.http import JsonResponse, HttpResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.cache import cache_page
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from rest_framework import status, generics
from rest_framework.views import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
from allauth.socialaccount.models import SocialToken, SocialAccount

from .models import CustomUser, UserProfile
from .serializers import UserSerializer, UserProfileSerializer

logger = logging.getLogger(__name__)
User = get_user_model()


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class UserDetailView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get(self, request):
        serializer = self.serializer_class(request.user, context={"request": request})
        return Response(serializer.data)


@login_required
def google_login_callback(request):
    user = request.user
    social_account = SocialAccount.objects.filter(user=user).first()

    if not social_account:
        return redirect("http://localhost:5173/login/callback/?error=NoSocialAccount")

    token = SocialToken.objects.filter(
        account=social_account, account__provider="google"
    ).first()

    if token:
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        return redirect(
            f"http://localhost:5173/login/callback/?access_token={access_token}"
        )
    return redirect("http://localhost:5173/login/callback/?error=NoGoogleToken")


@csrf_exempt
def google_login(request):
    if request.method != "POST":
        return JsonResponse({"detail": "Method not allowed."}, status=405)

    try:
        data = json.loads(request.body)
        google_access_token = data.get("access_token")

        if not google_access_token:
            logger.error("No access token provided")
            return JsonResponse({"detail": "No access token provided"}, status=400)

        try:
            idinfo = id_token.verify_oauth2_token(
                google_access_token,
                google_requests.Request(),
                os.getenv("GOOGLE_CLIENT_ID"),
            )

            if idinfo["aud"] != os.getenv("GOOGLE_CLIENT_ID"):
                raise ValueError("Wrong audience.")

            user, created = User.objects.get_or_create(
                email=idinfo["email"],
                defaults={
                    "name": idinfo["name"],
                    "profile_picture": idinfo.get("picture", ""),
                },
            )

            if not created:
                user.name = idinfo["name"]
                user.profile_picture = idinfo.get("picture", "")
                user.save()

            refresh = RefreshToken.for_user(user)
            return JsonResponse(
                {
                    "access": str(refresh.access_token),
                    "refresh": str(refresh),
                }
            )

        except ValueError as e:
            logger.error(f"Token verification failed: {str(e)}")
            return JsonResponse({"detail": f"Invalid token: {str(e)}"}, status=400)

    except json.JSONDecodeError:
        logger.error("Invalid JSON in request body")
        return JsonResponse({"detail": "Invalid JSON in request body"}, status=400)
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        return JsonResponse({"detail": "Server error occurred"}, status=500)


@api_view(["GET"])
@permission_classes([AllowAny])
@cache_page(60 * 60)
def serve_profile_picture(request, user_id):
    try:
        user = CustomUser.objects.get(id=user_id)
        if not user.profile_picture:
            return HttpResponseBadRequest("No profile picture available")

        response = requests.get(user.profile_picture)
        if response.status_code == 200:
            cached_response = HttpResponse(
                response.content,
                content_type=response.headers.get("content-type", "image/jpeg"),
            )
            cached_response["Cache-Control"] = "max-age=3600, public"
            return cached_response

        return HttpResponseBadRequest("Could not fetch profile picture")
    except CustomUser.DoesNotExist:
        return HttpResponseBadRequest("User not found")
    except Exception as e:
        return HttpResponseBadRequest(str(e))


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_profile(request):
    try:
        profile = UserProfile.objects.filter(user=request.user).first()
        if profile:
            return Response(
                {"detail": "Profile already exists"}, status=status.HTTP_400_BAD_REQUEST
            )

        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user, form_completed=True)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response(
            {"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def check_profile(request):
    profile = UserProfile.objects.filter(user=request.user).first()
    return Response({"form_completed": bool(profile and profile.form_completed)})


@api_view(["GET"])
@permission_classes([IsAdminUser])
def list_profiles(request):
    profiles = UserProfile.objects.all().order_by("-created_at")
    serializer = UserProfileSerializer(profiles, many=True)
    return Response(serializer.data)
