from rest_framework import serializers
from django.utils import timezone
from .models import CustomUser, UserProfile
import re


class UserSerializer(serializers.ModelSerializer):
    profile_picture_url = serializers.SerializerMethodField()
    linkedin_profile = serializers.CharField(
        source="userprofile.linkedin_profile", read_only=True, allow_null=True
    )
    github_profile = serializers.CharField(
        source="userprofile.github_profile", read_only=True, allow_null=True
    )
    tags = serializers.JSONField(
        source="userprofile.tags", read_only=True, allow_null=True
    )

    class Meta:
        model = CustomUser
        fields = [
            "id",
            "email",
            "name",
            "profile_picture",
            "profile_picture_url",
            "linkedin_profile",
            "github_profile",
            "tags",
        ]

    def get_profile_picture_url(self, obj):
        if not obj.profile_picture:
            return None
        request = self.context.get("request")
        if request:
            return (
                f"{request.scheme}://{request.get_host()}/api/profile-picture/{obj.id}/"
            )
        return None


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [
            "full_name",
            "birth_date",
            "linkedin_profile",
            "github_profile",
            "education_level",
            "institution",
            "phone",
            "area_of_expertise",
            "portfolio_url",
            "special_needs",
            "motivation",
            "accepted_terms",
            "share_contacts",
            "created_at",
            "updated_at",
            "form_completed",
        ]
        read_only_fields = ["created_at", "updated_at", "form_completed"]

    def validate_full_name(self, value):
        if len(value.strip()) < 2:
            raise serializers.ValidationError("Full name is too short")
        return value.strip()

    def validate_accepted_terms(self, value):
        if not value:
            raise serializers.ValidationError("You must accept the terms to continue")
        return value

    def validate_motivation(self, value):
        if not isinstance(value, list):
            raise serializers.ValidationError("Motivation must be a list")
        valid_choices = [choice[0] for choice in UserProfile.MOTIVATION_CHOICES]
        for motivation in value:
            if motivation not in valid_choices:
                raise serializers.ValidationError(
                    f"Invalid motivation choice: {motivation}"
                )
        return value

    def validate_birth_date(self, value):
        if value > timezone.now().date():
            raise serializers.ValidationError("Birth date cannot be in the future")
        age = (timezone.now().date() - value).days / 365.25
        if age < 13:
            raise serializers.ValidationError(
                "You must be at least 13 years old to register"
            )
        return value

    def validate_institution(self, value):
        value = value.strip()
        if len(value) < 2:
            raise serializers.ValidationError("Institution name is too short")
        if len(value) > 255:
            raise serializers.ValidationError("Institution name is too long")
        return value

    def validate_area_of_expertise(self, value):
        value = value.strip()
        if len(value) < 2:
            raise serializers.ValidationError("Area of expertise is too short")
        if len(value) > 255:
            raise serializers.ValidationError("Area of expertise is too long")
        return value

    def validate_github_profile(self, value):
        if value:
            value = value.strip()
            if value.endswith("/"):
                value = value[:-1]
            if not re.match(r"^https?://github\.com/[\w-]+$", value):
                raise serializers.ValidationError(
                    "Invalid GitHub profile URL. Should be like 'https://github.com/username'"
                )
            if len(value) > 255:
                raise serializers.ValidationError("GitHub profile URL is too long")
        return value

    def validate_linkedin_profile(self, value):
        if value:
            value = value.strip()
            if value.endswith("/"):
                value = value[:-1]
            if not re.match(r"^https?://(?:www\.)?linkedin\.com/in/[\w-]+$", value):
                raise serializers.ValidationError(
                    "Invalid LinkedIn profile URL. Should be like 'https://linkedin.com/in/username'"
                )
            if len(value) > 255:
                raise serializers.ValidationError("LinkedIn profile URL is too long")
        return value

    def validate(self, data):
        return data

    def create(self, validated_data):
        validated_data["form_completed"] = True
        return UserProfile.objects.create(**validated_data)

    def update(self, instance, validated_data):
        for field in [
            "full_name",
            "birth_date",
            "linkedin_profile",
            "github_profile",
            "education_level",
            "institution",
            "phone",
            "area_of_expertise",
            "portfolio_url",
            "special_needs",
            "motivation",
            "accepted_terms",
            "share_contacts",
        ]:
            if field in validated_data:
                setattr(instance, field, validated_data[field])
        instance.form_completed = True
        instance.save()
        return instance

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        if ret.get("birth_date"):
            ret["birth_date"] = instance.birth_date.strftime("%Y-%m-%d")
        if ret.get("created_at"):
            ret["created_at"] = instance.created_at.strftime("%Y-%m-%d %H:%M:%S")
        if ret.get("updated_at"):
            ret["updated_at"] = instance.updated_at.strftime("%Y-%m-%d %H:%M:%S")
        ret["education_level_display"] = instance.get_education_level_display()
        return ret


class UserProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ["tags"]

    def validate_tags(self, value):
        if not isinstance(value, list):
            raise serializers.ValidationError("Tags devem ser uma lista de strings.")
        if any(not isinstance(s, str) for s in value):
            raise serializers.ValidationError("Todas as tags devem ser strings.")
        return value
