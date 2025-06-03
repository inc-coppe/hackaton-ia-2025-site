from django.urls import path
from .views import (
    CreateUserView,
    CurrentUserDetailView,
    UserProfileUpdateView,
    check_profile,
    create_profile,
    google_login,
    google_login_callback,
    serve_profile_picture,
    MyUserProfileView,
    UserPublicProfileView,
    list_profiles,
    UserSearchView,
)

urlpatterns = [
    path("user/register/", CreateUserView.as_view(), name="register"),
    path("auth/user/", CurrentUserDetailView.as_view(), name="current_user_detail"),
    path("google/login/", google_login, name="google_login_token_exchange"),
    path("auth/google/callback/", google_login_callback, name="google_callback"),
    path(
        "profile-picture/<int:user_id>/",
        serve_profile_picture,
        name="serve_profile_picture",
    ),
    path("profile/create/", create_profile, name="create_profile"),
    path("profile/me/", MyUserProfileView.as_view(), name="my_user_profile"),
    path("profile/check/", check_profile, name="check_profile"),
    path(
        "profile/update/", UserProfileUpdateView.as_view(), name="update_profile_tags"
    ),
    path(
        "users/<int:user_id>/profile/",
        UserPublicProfileView.as_view(),
        name="user_public_profile",
    ),
    # Rotas de seguir/deixar de seguir e listagens de seguidores/seguindo foram removidas
    path("admin/profiles/", list_profiles, name="admin_list_profiles"),
    path("users/search/", UserSearchView.as_view(), name="user_search"),
]
