import os
import json
import logging
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import redirect, get_object_or_404
from django.http import JsonResponse, HttpResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.cache import cache_page
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from rest_framework import status, generics, views as drf_views
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from google.oauth2 import id_token
from google.auth.transport import requests as google_auth_requests
from allauth.socialaccount.models import SocialToken, SocialAccount
import requests as ext_requests
from .models import CustomUser, UserProfile
from .serializers import (
    UserRegistrationSerializer,
    UserDetailSerializer,
    UserProfileSerializer,
    UserProfileTagsUpdateSerializer,
    PublicUserProfileSerializer,
    BaseUserSerializer,
)

logger = logging.getLogger(__name__)
User = get_user_model()


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer
    permission_classes = [AllowAny]


class CurrentUserDetailView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserDetailSerializer
    authentication_classes = [JWTAuthentication]

    def get_object(self):
        return self.request.user

    def get_serializer_context(self):
        return {"request": self.request}


class MyUserProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get_object(self):
        profile, created = UserProfile.objects.get_or_create(user=self.request.user)
        if created:
            profile.full_name = self.request.user.name
            profile.save()
        return profile

    def get_serializer_context(self):
        return {"request": self.request}

    def perform_update(self, serializer):
        try:
            # Get the user_name from request data
            user_name = self.request.data.get("user_name")

            if user_name:
                # Update user name directly
                user = self.request.user
                user.name = user_name
                user.save(update_fields=["name"])

            # Save the profile
            serializer.save()

        except Exception as e:
            logger.error(f"Error updating profile: {str(e)}")
            raise

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop("partial", False)
        instance = self.get_object()

        # Create serializer with request data
        serializer = self.get_serializer(instance, data=request.data, partial=partial)

        # Validate serializer
        serializer.is_valid(raise_exception=True)

        # Perform update
        self.perform_update(serializer)

        # Get fresh instance
        instance.refresh_from_db()
        instance.user.refresh_from_db()

        # Return updated data
        return Response(self.get_serializer(instance).data)

    def partial_update(self, request, *args, **kwargs):
        kwargs["partial"] = True
        return self.update(request, *args, **kwargs)


@login_required
def google_login_callback(request):
    user = request.user
    social_account = SocialAccount.objects.filter(user=user, provider="google").first()
    if not social_account:
        return redirect(
            os.getenv("FRONTEND_URL", "http://localhost:5173")
            + "/login/callback/?error=NoSocialAccount"
        )
    try:
        token = SocialToken.objects.get(account=social_account)
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        user.profile_picture = social_account.extra_data.get(
            "picture", user.profile_picture
        )
        user.name = social_account.extra_data.get("name", user.name)
        user.save()
        return redirect(
            os.getenv("FRONTEND_URL", "http://localhost:5173")
            + f"/login/callback/?access_token={access_token}&refresh_token={str(refresh)}"
        )
    except SocialToken.DoesNotExist:
        return redirect(
            os.getenv("FRONTEND_URL", "http://localhost:5173")
            + "/login/callback/?error=NoGoogleToken"
        )
    except Exception as e:
        logger.error(f"Error in google_login_callback: {str(e)}")
        return redirect(
            os.getenv("FRONTEND_URL", "http://localhost:5173")
            + "/login/callback/?error=ServerError"
        )


@csrf_exempt
@api_view(["POST"])
@permission_classes([AllowAny])
def google_login(request):
    if request.method != "POST":
        return JsonResponse({"detail": "Method not allowed."}, status=405)
    try:
        data = json.loads(request.body)
        google_id_token_from_frontend = data.get("access_token")
        if not google_id_token_from_frontend:
            logger.error("No token provided in 'access_token' field by frontend")
            return JsonResponse(
                {"detail": "No token provided in 'access_token' field"}, status=400
            )
        idinfo = id_token.verify_oauth2_token(
            google_id_token_from_frontend,
            google_auth_requests.Request(),
            os.getenv("GOOGLE_CLIENT_ID"),
        )
        if idinfo["iss"] not in ["accounts.google.com", "https://accounts.google.com"]:
            raise ValueError("Wrong issuer.")

        aud_is_valid = False
        client_ids = [
            os.getenv("GOOGLE_CLIENT_ID"),
            os.getenv("GOOGLE_CLIENT_ID_WEB"),
            os.getenv("GOOGLE_CLIENT_ID_ANDROID"),
            os.getenv("GOOGLE_CLIENT_ID_IOS"),
        ]
        client_ids = [cid for cid in client_ids if cid]

        if idinfo["aud"] in client_ids:
            aud_is_valid = True

        if not aud_is_valid:
            logger.error(
                f"Token audience verification failed. aud: {idinfo.get('aud')}, expected one of: {client_ids}"
            )
            raise ValueError(
                f"Could not verify audience. Received: {idinfo.get('aud')}"
            )

        email = idinfo["email"]
        name = idinfo.get("name", "")
        profile_picture = idinfo.get("picture", None)

        user, created = User.objects.get_or_create(
            email=email, defaults={"name": name, "profile_picture": profile_picture}
        )

        if not created:
            user.name = name
            user.profile_picture = profile_picture
            user.save()

        if not user.has_usable_password():
            user.set_unusable_password()
            user.save()

        refresh = RefreshToken.for_user(user)
        return JsonResponse(
            {
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "user": UserDetailSerializer(user, context={"request": request}).data,
            }
        )
    except ValueError as e:
        logger.error(f"Google token verification failed: {str(e)}")
        return JsonResponse({"detail": f"Invalid token: {str(e)}"}, status=401)
    except json.JSONDecodeError:
        logger.error("Invalid JSON in request body for Google login")
        return JsonResponse({"detail": "Invalid JSON in request body"}, status=400)
    except Exception as e:
        logger.error(f"Unexpected error in google_login: {str(e)}")
        return JsonResponse(
            {"detail": "Server error occurred during Google login"}, status=500
        )


@api_view(["GET"])
@permission_classes([AllowAny])
@cache_page(60 * 15)
def serve_profile_picture(request, user_id):
    user = get_object_or_404(User, id=user_id)
    if not user.profile_picture:
        return HttpResponseBadRequest("No profile picture URL available for this user.")
    try:
        if user.profile_picture.startswith("http"):
            response = ext_requests.get(user.profile_picture, stream=True, timeout=5)
            response.raise_for_status()
            content_type = response.headers.get("Content-Type", "image/jpeg")
            cached_response = HttpResponse(response.content, content_type=content_type)
            return cached_response
        else:
            return HttpResponseBadRequest("Profile picture source is not a valid URL.")
    except ext_requests.exceptions.RequestException as e:
        logger.error(
            f"Could not fetch profile picture for user {user_id} from {user.profile_picture}: {e}"
        )
        return HttpResponse(
            status=status.HTTP_503_SERVICE_UNAVAILABLE,
            content="Could not fetch profile picture.",
        )
    except Exception as e:
        logger.error(f"Error serving profile picture for user {user_id}: {e}")
        return HttpResponseBadRequest(str(e))


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_profile(request):
    profile_exists = UserProfile.objects.filter(user=request.user).exists()
    if profile_exists:
        return Response(
            {
                "detail": "Profile already exists. Use PUT/PATCH on 'profile/me/' to update."
            },
            status=status.HTTP_400_BAD_REQUEST,
        )
    serializer = UserProfileSerializer(data=request.data, context={"request": request})
    if serializer.is_valid():
        serializer.save(user=request.user, form_completed=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def check_profile(request):
    """
    Check if a user profile exists and if the form is completed.
    """
    try:
        profile = request.user.userprofile
        return Response(
            {"form_completed": profile.form_completed, "profile_exists": True}
        )
    except UserProfile.DoesNotExist:
        return Response({"form_completed": False, "profile_exists": False})


class UserProfileUpdateView(generics.UpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileTagsUpdateSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_object(self):
        try:
            return self.request.user.userprofile
        except UserProfile.DoesNotExist:
            raise ObjectDoesNotExist("UserProfile does not exist. Create one first.")


class UserPublicProfileView(generics.RetrieveAPIView):
    queryset = UserProfile.objects.select_related("user").all()
    serializer_class = PublicUserProfileSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = "user__id"
    lookup_url_kwarg = "user_id"

    def get_serializer_context(self):
        return {"request": self.request}


class FollowUserView(drf_views.APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def post(self, request, user_id):
        user_to_follow = get_object_or_404(User, id=user_id)
        current_user = request.user

        if current_user == user_to_follow:
            return Response(
                {"detail": "You cannot follow yourself."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if current_user.following.filter(id=user_to_follow.id).exists():
            return Response(
                {"detail": "You are already following this user."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        current_user.following.add(user_to_follow)
        return Response(
            {"detail": f"You are now following {user_to_follow.name}."},
            status=status.HTTP_200_OK,
        )


class UnfollowUserView(drf_views.APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def post(self, request, user_id):
        user_to_unfollow = get_object_or_404(User, id=user_id)
        current_user = request.user

        if not current_user.following.filter(id=user_to_unfollow.id).exists():
            return Response(
                {"detail": "You are not following this user."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        current_user.following.remove(user_to_unfollow)
        return Response(
            {"detail": f"You have unfollowed {user_to_unfollow.name}."},
            status=status.HTTP_200_OK,
        )


class UserFollowingListView(generics.ListAPIView):
    serializer_class = BaseUserSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get_queryset(self):
        user_id = self.kwargs["user_id"]
        user = get_object_or_404(User, id=user_id)
        return user.following.all()

    def get_serializer_context(self):
        return {"request": self.request}


class UserFollowersListView(generics.ListAPIView):
    serializer_class = BaseUserSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get_queryset(self):
        user_id = self.kwargs["user_id"]
        user = get_object_or_404(User, id=user_id)
        return user.followers.all()

    def get_serializer_context(self):
        return {"request": self.request}


@api_view(["GET"])
@permission_classes([IsAdminUser])
def list_profiles(request):
    profiles = UserProfile.objects.select_related("user").all().order_by("-created_at")
    serializer = UserProfileSerializer(
        profiles, many=True, context={"request": request}
    )
    return Response(serializer.data)
