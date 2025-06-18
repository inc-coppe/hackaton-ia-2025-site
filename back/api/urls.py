from django.urls import path
from .views import (
    CreateUserView,
    CurrentUserDetailView,
    check_profile,
    create_profile,
    google_login,
    serve_profile_picture,
    MyUserProfileView,
    UserPublicProfileView,
    UserSearchView,
    ProfilePictureUploadView,
)

urlpatterns = [
    path("user/register/", CreateUserView.as_view(), name="register"),
    path("auth/user/", CurrentUserDetailView.as_view(), name="current_user_detail"),
    path("google/login/", google_login, name="google_login_token_exchange"),
    path(
        "profile-picture/<int:user_id>/",
        serve_profile_picture,
        name="serve_profile_picture",
    ),
    path("profile/create/", create_profile, name="create_profile"),
    path("profile/me/", MyUserProfileView.as_view(), name="my_user_profile"),
    path("profile/check/", check_profile, name="check_profile"),
    path(
        "users/<int:user_id>/profile/",
        UserPublicProfileView.as_view(),
        name="user_public_profile",
    ),
    path("users/search/", UserSearchView.as_view(), name="user_search"),
    path(
        "profile/upload-picture/",
        ProfilePictureUploadView.as_view(),
        name="profile_picture_upload",
    ),
]
