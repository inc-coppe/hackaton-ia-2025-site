from rest_framework import serializers
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
        read_only_fields = fields

    def get_profile_picture_url(self, obj):
        if not obj.profile_picture:
            return None
        request = self.context.get("request")
        if request:
            return (
                f"{request.scheme}://{request.get_host()}/api/profile-picture/{obj.id}/"
            )
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

    class Meta(BaseUserSerializer.Meta):
        fields = BaseUserSerializer.Meta.fields + [
            "linkedin_profile",
            "github_profile",
            "tags",
            "area_of_expertise",
            "organization",
            "institution",
        ]
        read_only_fields = fields


class UserProfileSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(source="user.email", read_only=True)
    user_profile_picture_url = serializers.SerializerMethodField(read_only=True)
    education_level_display = serializers.CharField(
        source="get_education_level_display", read_only=True
    )
    followers_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()
    user_name = serializers.CharField(source="user.name", read_only=True)
    user_id = serializers.IntegerField(source="user.id", read_only=True)

    class Meta:
        model = UserProfile
        fields = [
            "user_id",
            "email",
            "user_name",
            "user_profile_picture_url",
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
        ]
        read_only_fields = [
            "user_id",
            "email",
            "user_profile_picture_url",
            "form_completed",
            "education_level_display",
            "followers_count",
            "following_count",
            "user_name",
        ]

    def get_user_profile_picture_url(self, obj):
        user = obj.user
        if not user.profile_picture:
            return None
        request = self.context.get("request")
        if request:
            return f"{request.scheme}://{request.get_host()}/api/profile-picture/{user.id}/"
        return user.profile_picture

    def get_followers_count(self, obj):
        return obj.user.followers.count()

    def get_following_count(self, obj):
        return obj.user.following.count()

    def update(self, instance, validated_data):
        user_name_from_data = validated_data.pop("user_name", None)
        if user_name_from_data is not None:
            user = instance.user
            if user.name != user_name_from_data:
                user.name = user_name_from_data
                user.save(update_fields=["name"])

        return super().update(instance, validated_data)


class PublicProfileDetailSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(source="user.id", read_only=True)
    user_name = serializers.CharField(source="user.name", read_only=True)
    user_profile_picture_url = serializers.URLField(
        source="user.profile_picture", read_only=True
    )
    email = serializers.SerializerMethodField()
    organization = serializers.CharField(
        source="organization", read_only=True, allow_null=True
    )
    institution = serializers.CharField(
        source="institution", read_only=True, allow_null=True
    )

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
        ]
        read_only_fields = fields

    def get_email(self, obj):
        if obj.share_contacts:
            return obj.user.email
        return None


class UserSearchSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(source="user.id", read_only=True)
    user_name = serializers.CharField(source="user.name", read_only=True)
    profile_picture_url = serializers.URLField(
        source="user.profile_picture", read_only=True
    )

    class Meta:
        model = UserProfile
        fields = [
            "user_id",
            "user_name",
            "profile_picture_url",
            "full_name",
            "organization",
            "institution",
            "area_of_expertise",
            "tags",
        ]
