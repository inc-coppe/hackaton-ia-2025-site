from rest_framework import serializers
from django.utils import timezone
from .models import CustomUser, UserProfile
import re


class UserSerializer(serializers.ModelSerializer):
    profile_picture_url = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = ["id", "email", "name", "profile_picture", "profile_picture_url"]

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
            "birth_date",
            "gender",
            "institution",
            "position",
            "education_level",
            "area_of_expertise",
            "github_profile",
            "linkedin_profile",
            "created_at",
            "updated_at",
            "form_completed",
        ]
        read_only_fields = ["created_at", "updated_at", "form_completed"]

    def validate_birth_date(self, value):
        """
        Check that the birth date is not in the future and person is at least 13 years old
        """
        if value > timezone.now().date():
            raise serializers.ValidationError("Birth date cannot be in the future")

        age = (timezone.now().date() - value).days / 365.25
        if age < 13:
            raise serializers.ValidationError(
                "You must be at least 13 years old to register"
            )

        return value

    def validate_institution(self, value):
        """
        Ensure institution name is properly formatted and not too short
        """
        value = value.strip()
        if len(value) < 2:
            raise serializers.ValidationError("Institution name is too short")
        if len(value) > 255:
            raise serializers.ValidationError("Institution name is too long")
        return value

    def validate_position(self, value):
        """
        Ensure position is properly formatted and not too short
        """
        value = value.strip()
        if len(value) < 2:
            raise serializers.ValidationError("Position/Role is too short")
        if len(value) > 255:
            raise serializers.ValidationError("Position/Role is too long")
        return value

    def validate_area_of_expertise(self, value):
        """
        Ensure area of expertise is properly formatted and not too short
        """
        value = value.strip()
        if len(value) < 2:
            raise serializers.ValidationError("Area of expertise is too short")
        if len(value) > 255:
            raise serializers.ValidationError("Area of expertise is too long")
        return value

    def validate_github_profile(self, value):
        """
        Validate GitHub profile URL
        """
        if value:
            value = value.strip()
            # Remove trailing slash if present
            if value.endswith("/"):
                value = value[:-1]

            if not re.match(r"^https?://github\.com/[\w-]+$", value):
                raise serializers.ValidationError(
                    "Invalid GitHub profile URL. Should be like 'https://github.com/username'"
                )

            # Check if URL is too long
            if len(value) > 255:
                raise serializers.ValidationError("GitHub profile URL is too long")
        return value

    def validate_linkedin_profile(self, value):
        """
        Validate LinkedIn profile URL
        """
        if value:
            value = value.strip()
            # Remove trailing slash if present
            if value.endswith("/"):
                value = value[:-1]

            if not re.match(r"^https?://(?:www\.)?linkedin\.com/in/[\w-]+$", value):
                raise serializers.ValidationError(
                    "Invalid LinkedIn profile URL. Should be like 'https://linkedin.com/in/username'"
                )

            # Check if URL is too long
            if len(value) > 255:
                raise serializers.ValidationError("LinkedIn profile URL is too long")
        return value

    def validate(self, data):
        """
        Object-level validation
        """
        # Add any cross-field validation here if needed
        return data

    def create(self, validated_data):
        """
        Create and return a new UserProfile instance
        """
        validated_data["form_completed"] = True
        return UserProfile.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing UserProfile instance
        """
        instance.birth_date = validated_data.get("birth_date", instance.birth_date)
        instance.gender = validated_data.get("gender", instance.gender)
        instance.institution = validated_data.get("institution", instance.institution)
        instance.position = validated_data.get("position", instance.position)
        instance.education_level = validated_data.get(
            "education_level", instance.education_level
        )
        instance.area_of_expertise = validated_data.get(
            "area_of_expertise", instance.area_of_expertise
        )
        instance.github_profile = validated_data.get(
            "github_profile", instance.github_profile
        )
        instance.linkedin_profile = validated_data.get(
            "linkedin_profile", instance.linkedin_profile
        )
        instance.form_completed = True
        instance.save()
        return instance

    def to_representation(self, instance):
        """
        Convert the model instance to a dictionary, formatting dates and adding display values
        """
        ret = super().to_representation(instance)

        # Format dates for consistent representation
        if ret.get("birth_date"):
            ret["birth_date"] = instance.birth_date.strftime("%Y-%m-%d")
        if ret.get("created_at"):
            ret["created_at"] = instance.created_at.strftime("%Y-%m-%d %H:%M:%S")
        if ret.get("updated_at"):
            ret["updated_at"] = instance.updated_at.strftime("%Y-%m-%d %H:%M:%S")

        # Add human-readable choices
        ret["gender_display"] = instance.get_gender_display()
        ret["education_level_display"] = instance.get_education_level_display()

        return ret
