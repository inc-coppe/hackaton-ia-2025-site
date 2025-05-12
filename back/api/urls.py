from django.urls import path
from .views import (
    CreateUserView,
    UserDetailView,
    check_profile,
    create_profile,
    google_login,
    google_login_callback,
    serve_profile_picture,
)

urlpatterns = [
    path("user/register/", CreateUserView.as_view(), name="register"),
    path("auth/user/", UserDetailView.as_view(), name="user_detail"),
    path("google/login/", google_login, name="google_login"),
    path("callback/", google_login_callback, name="callback"),
    path(
        "profile-picture/<int:user_id>/",
        serve_profile_picture,
        name="serve_profile_picture",
    ),
    path("profile/create/", create_profile, name="create_profile"),
    path("profile/check/", check_profile, name="check_profile"),
]
