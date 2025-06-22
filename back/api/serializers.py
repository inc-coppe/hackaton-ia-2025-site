from rest_framework import serializers
from django.conf import settings
from .models import CustomUser, UserProfile


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False, allow_null=True)

    class Meta:
        model = CustomUser
        fields = ["email", "name", "password", "profile_picture"]

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data["email"],
            name=validated_data["name"],
            password=validated_data.get("password"),
            profile_picture=validated_data.get("profile_picture"),
        )
        return user


class BaseUserSerializer(serializers.ModelSerializer):
    profile_picture_url = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = [
            "id",
            "email",
            "name",
            "profile_picture",
            "profile_picture_url",
        ]
        read_only_fields = ["id", "email", "profile_picture_url"]

    def get_profile_picture_url(self, obj):
        request = self.context.get("request")
        if not obj.profile_picture:
            return None
        if obj.profile_picture.startswith("http"):
            return obj.profile_picture
        if request:
            return f"{request.scheme}://{request.get_host()}{obj.profile_picture}"
        return obj.profile_picture


class UserDetailSerializer(BaseUserSerializer):
    linkedin_profile = serializers.CharField(
        source="userprofile.linkedin_profile", read_only=True, allow_null=True
    )
    github_profile = serializers.CharField(
        source="userprofile.github_profile", read_only=True, allow_null=True
    )
    tags = serializers.JSONField(
        source="userprofile.tags", read_only=True, allow_null=True
    )
    area_of_expertise = serializers.CharField(
        source="userprofile.area_of_expertise", read_only=True, allow_null=True
    )
    organization = serializers.CharField(
        source="userprofile.organization", read_only=True, allow_null=True
    )
    institution = serializers.CharField(
        source="userprofile.institution", read_only=True, allow_null=True
    )
    google_profile_picture_url = serializers.SerializerMethodField()

    class Meta(BaseUserSerializer.Meta):
        fields = BaseUserSerializer.Meta.fields + [
            "linkedin_profile",
            "github_profile",
            "tags",
            "area_of_expertise",
            "organization",
            "institution",
            "google_profile_picture_url",
        ]
        read_only_fields = BaseUserSerializer.Meta.read_only_fields + [
            "linkedin_profile",
            "github_profile",
            "tags",
            "area_of_expertise",
            "organization",
            "institution",
            "google_profile_picture_url",
        ]

    def get_google_profile_picture_url(self, obj):
        if (
            obj.profile_picture
            and obj.profile_picture.startswith("http")
            and "googleusercontent" in obj.profile_picture
        ):
            return obj.profile_picture
        return None


class UserProfileSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(read_only=True)
    user_name = serializers.CharField(required=False, allow_blank=True)
    user_profile_picture = serializers.URLField(
        required=False, allow_null=True, allow_blank=True
    )
    user_profile_picture_url = serializers.SerializerMethodField()
    education_level_display = serializers.CharField(
        source="get_education_level_display", read_only=True
    )
    followers_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()
    user_id = serializers.IntegerField(read_only=True)
    google_profile_picture_url = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = [
            "user_id",
            "email",
            "user_name",
            "user_profile_picture_url",
            "user_profile_picture",
            "full_name",
            "cpf",
            "birth_date",
            "organization",
            "linkedin_profile",
            "github_profile",
            "education_level",
            "education_level_display",
            "institution",
            "phone",
            "area_of_expertise",
            "portfolio_url",
            "special_needs",
            "motivation",
            "accepted_terms",
            "share_contacts",
            "form_completed",
            "tags",
            "followers_count",
            "following_count",
            "google_profile_picture_url",
        ]
        read_only_fields = [
            "user_id",
            "email",
            "user_profile_picture_url",
            "form_completed",
            "education_level_display",
            "followers_count",
            "following_count",
            "google_profile_picture_url",
        ]

    def get_user_profile_picture_url(self, obj):
        request = self.context.get("request")
        if obj.user.profile_picture:
            if obj.user.profile_picture.startswith("http"):
                return obj.user.profile_picture
            if request:
                return (
                    f"{request.scheme}://{request.get_host()}{obj.user.profile_picture}"
                )
            return obj.user.profile_picture
        return None

    def get_google_profile_picture_url(self, obj):
        if (
            obj.user.profile_picture
            and obj.user.profile_picture.startswith("http")
            and "googleusercontent" in obj.user.profile_picture
        ):
            return obj.user.profile_picture
        return None

    def get_followers_count(self, obj):
        return obj.user.followers.count()

    def get_following_count(self, obj):
        return obj.user.following.count()

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret["email"] = instance.user.email
        ret["user_name"] = instance.user.name
        ret["user_id"] = instance.user.id
        return ret

    def update(self, instance, validated_data):
        user = instance.user
        user_name = validated_data.pop("user_name", None)
        user_profile_picture = validated_data.pop("user_profile_picture", None)
        if user_name is not None:
            user.name = user_name
        if user_profile_picture is not None:
            user.profile_picture = user_profile_picture
        user.save()
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class PublicProfileDetailSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(read_only=True)
    user_name = serializers.CharField(read_only=True)
    user_profile_picture_url = serializers.URLField(read_only=True)
    email = serializers.SerializerMethodField()
    organization = serializers.CharField(read_only=True, allow_null=True)
    institution = serializers.CharField(read_only=True, allow_null=True)
    google_profile_picture_url = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = [
            "user_id",
            "user_name",
            "user_profile_picture_url",
            "full_name",
            "linkedin_profile",
            "github_profile",
            "area_of_expertise",
            "tags",
            "email",
            "organization",
            "institution",
            "google_profile_picture_url",
        ]
        read_only_fields = fields

    def get_email(self, obj):
        if obj.share_contacts:
            return obj.user.email
        return None

    def get_google_profile_picture_url(self, obj):
        if (
            obj.user.profile_picture
            and obj.user.profile_picture.startswith("http")
            and "googleusercontent" in obj.user.profile_picture
        ):
            return obj.user.profile_picture
        return None


class UserSearchSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(read_only=True)
    user_name = serializers.CharField(read_only=True)
    profile_picture_url = serializers.SerializerMethodField()
    google_profile_picture_url = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = [
            "user_id",
            "user_name",
            "profile_picture_url",
            "google_profile_picture_url",
            "full_name",
            "organization",
            "institution",
            "area_of_expertise",
            "tags",
        ]

    def get_profile_picture_url(self, obj):
        request = self.context.get("request")
        if obj.user.profile_picture:
            if obj.user.profile_picture.startswith("http"):
                return obj.user.profile_picture
            if request:
                return (
                    f"{request.scheme}://{request.get_host()}{obj.user.profile_picture}"
                )
            return obj.user.profile_picture
        return None

    def get_google_profile_picture_url(self, obj):
        if (
            obj.user.profile_picture
            and obj.user.profile_picture.startswith("http")
            and "googleusercontent" in obj.user.profile_picture
        ):
            return obj.user.profile_picture
        return None
