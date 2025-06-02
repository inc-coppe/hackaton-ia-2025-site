from rest_framework import serializers
from django.utils import timezone
from .models import CustomUser, UserProfile
import re


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
    followers_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = [
            "id",
            "email",
            "name",
            "profile_picture",
            "profile_picture_url",
            "followers_count",
            "following_count",
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

    def get_followers_count(self, obj):
        return obj.followers.count()

    def get_following_count(self, obj):
        return obj.following.count()


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
    is_followed_by_request_user = serializers.SerializerMethodField()

    class Meta(BaseUserSerializer.Meta):
        fields = BaseUserSerializer.Meta.fields + [
            "linkedin_profile",
            "github_profile",
            "tags",
            "area_of_expertise",
            "is_followed_by_request_user",
        ]
        read_only_fields = fields

    def get_is_followed_by_request_user(self, obj):
        request_obj = self.context.get("request", None)
        if request_obj and hasattr(request_obj, "user") and request_obj.user:
            if getattr(request_obj.user, "is_authenticated", False):
                return obj.followers.filter(id=request_obj.user.id).exists()
        return False


class UserProfileSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(source="user.email", read_only=True)
    user_name = serializers.CharField(source="user.name", required=False)
    user_profile_picture_url = serializers.SerializerMethodField(read_only=True)
    education_level_display = serializers.CharField(
        source="get_education_level_display", read_only=True
    )
    followers_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = [
            "email",
            "user_name",
            "user_profile_picture_url",
            "full_name",
            "birth_date",
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
            "created_at",
            "updated_at",
            "form_completed",
            "tags",
            "followers_count",
            "following_count",
        ]
        read_only_fields = [
            "email",
            "user_profile_picture_url",
            "created_at",
            "updated_at",
            "form_completed",
            "education_level_display",
            "followers_count",
            "following_count",
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

    def validate_full_name(self, value):
        if value is not None and len(value.strip()) < 2:
            raise serializers.ValidationError("O nome completo é muito curto.")
        return value.strip() if value else None

    def validate_user_name(self, value):
        if value is not None and len(value.strip()) < 2:
            raise serializers.ValidationError(
                "O nome de usuário (exibição) é muito curto."
            )
        if value is not None and len(value.strip()) > 150:
            raise serializers.ValidationError(
                "O nome de usuário (exibição) é muito longo."
            )
        return value.strip() if value else None

    def validate_accepted_terms(self, value):
        if not value:
            raise serializers.ValidationError(
                "Você deve aceitar os termos para continuar."
            )
        return value

    def validate_motivation(self, value):
        if not isinstance(value, list) or not value:
            raise serializers.ValidationError(
                "A motivação é obrigatória e deve ser uma lista."
            )
        valid_choices = [choice[0] for choice in UserProfile.MOTIVATION_CHOICES]
        for motivation_item in value:
            if motivation_item not in valid_choices:
                raise serializers.ValidationError(
                    f"Opção de motivação inválida: {motivation_item}."
                )
        return value

    def validate_birth_date(self, value):
        if value is None:
            raise serializers.ValidationError("Data de nascimento é obrigatória.")
        if value > timezone.now().date():
            raise serializers.ValidationError(
                "A data de nascimento não pode ser no futuro."
            )
        age = (timezone.now().date() - value).days / 365.25
        if age < 13:
            raise serializers.ValidationError(
                "Você deve ter pelo menos 13 anos para se registrar."
            )
        return value

    def validate_institution(self, value):
        if value is None or not value.strip():
            raise serializers.ValidationError("Instituição é obrigatória.")
        value = value.strip()
        if len(value) < 2:
            raise serializers.ValidationError("O nome da instituição é muito curto.")
        if len(value) > 255:
            raise serializers.ValidationError("O nome da instituição é muito longo.")
        return value

    def validate_area_of_expertise(self, value):
        if value is None or not value.strip():
            raise serializers.ValidationError("Área de especialidade é obrigatória.")
        value = value.strip()
        if len(value) < 2:
            raise serializers.ValidationError("A área de especialidade é muito curta.")
        if len(value) > 255:
            raise serializers.ValidationError("A área de especialidade é muito longa.")
        return value

    def validate_education_level(self, value):
        if value is None or not value.strip():
            raise serializers.ValidationError("Nível de escolaridade é obrigatório.")
        valid_choices = [choice[0] for choice in UserProfile.EDUCATION_CHOICES]
        if value not in valid_choices:
            raise serializers.ValidationError("Nível de escolaridade inválido.")
        return value

    def validate_github_profile(self, value):
        if value:
            value = value.strip()
            if value.endswith("/"):
                value = value[:-1]
            if not re.match(r"^https?://github\.com/[\w.-]+/?$", value):
                raise serializers.ValidationError(
                    "URL do GitHub inválida. Deve ser como 'https://github.com/username'."
                )
            if len(value) > 255:
                raise serializers.ValidationError(
                    "A URL do perfil do GitHub é muito longa."
                )
        return value

    def validate_linkedin_profile(self, value):
        if value:
            value = value.strip()
            if value.endswith("/"):
                value = value[:-1]
            if not re.match(r"^https?://(?:www\.)?linkedin\.com/in/[\w.-]+/?$", value):
                raise serializers.ValidationError(
                    "URL do LinkedIn inválida. Deve ser como 'https://linkedin.com/in/username'."
                )
            if len(value) > 255:
                raise serializers.ValidationError(
                    "A URL do perfil do LinkedIn é muito longa."
                )
        return value

    def validate_phone(self, value):
        if value:
            value = value.strip()
            if not re.match(r"^\+?[0-9\s\-\(\)]{10,20}$", value):
                raise serializers.ValidationError("Formato de telefone inválido.")
        return value

    def validate_tags(self, value):
        if not isinstance(value, list):
            raise serializers.ValidationError("Tags devem ser uma lista de strings.")
        if any(not isinstance(s, str) for s in value):
            raise serializers.ValidationError("Todas as tags devem ser strings.")
        return value

    def validate(self, data):
        is_creating = not self.instance
        errors = {}

        if is_creating:
            if not data.get("accepted_terms", False):
                errors["accepted_terms"] = "Você deve aceitar os termos para continuar."

            required_fields_map = {
                "full_name": "Nome completo",
                "birth_date": "Data de nascimento",
                "education_level": "Nível de escolaridade",
                "institution": "Instituição",
                "area_of_expertise": "Área de especialidade",
                "motivation": "Motivação",
            }
            for field_name, display_name in required_fields_map.items():
                field_value = data.get(field_name)
                is_empty_list = isinstance(field_value, list) and not field_value
                is_empty_string = (
                    isinstance(field_value, str) and not field_value.strip()
                )
                is_none = field_value is None

                if is_none or is_empty_string or is_empty_list:
                    errors[field_name] = (
                        f"{display_name} é obrigatório(a) e não pode estar vazio(a)."
                    )

        if errors:
            raise serializers.ValidationError(errors)
        return data

    def create(self, validated_data):
        validated_data.pop("user_name", None)
        validated_data["form_completed"] = True
        user_profile = UserProfile(**validated_data)
        user_profile.save()
        return user_profile

    def update(self, instance, validated_data):
        custom_user = instance.user
        user_name_updated_successfully = False

        if "user_name" in validated_data:
            new_user_name_value = validated_data.pop("user_name")
            if custom_user.name != new_user_name_value:
                custom_user.name = new_user_name_value
                try:
                    custom_user.save(update_fields=["name"])
                    reloaded_user = CustomUser.objects.get(pk=custom_user.pk)
                    if reloaded_user.name == new_user_name_value:
                        user_name_updated_successfully = True
                        instance.user = reloaded_user  # Garante que a instância do perfil use o usuário atualizado
                except Exception:
                    pass  # Idealmente, logar erro aqui

        profile_fields_actually_changed = False
        for field_name, value in validated_data.items():
            if hasattr(instance, field_name) and field_name != "user":
                if getattr(instance, field_name) != value:
                    setattr(instance, field_name, value)
                    profile_fields_actually_changed = True

        original_form_completed_status = instance.form_completed
        if profile_fields_actually_changed or (
            user_name_updated_successfully and not instance.form_completed
        ):
            instance.form_completed = True

        if (
            profile_fields_actually_changed
            or instance.form_completed != original_form_completed_status
        ):
            instance.save()
        elif (
            user_name_updated_successfully
            and not profile_fields_actually_changed
            and instance.form_completed == original_form_completed_status
        ):
            pass  # UserProfile não precisou ser salvo novamente se apenas user_name mudou e form_completed já estava ok

        return instance

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        if instance.birth_date and ret.get("birth_date"):
            ret["birth_date"] = instance.birth_date.strftime("%Y-%m-%d")
        return ret


class UserProfileTagsUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ["tags"]

    def validate_tags(self, value):
        if not isinstance(value, list):
            raise serializers.ValidationError("Tags devem ser uma lista de strings.")
        if any(not isinstance(s, str) for s in value):
            raise serializers.ValidationError("Todas as tags devem ser strings.")
        return value


class PublicUserProfileSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(source="user.id", read_only=True)
    name = serializers.CharField(source="user.name", read_only=True)
    profile_picture_url = serializers.SerializerMethodField(read_only=True)
    followers_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()
    is_followed_by_request_user = serializers.SerializerMethodField()
    education_level_display = serializers.CharField(
        source="get_education_level_display", read_only=True
    )

    class Meta:
        model = UserProfile
        fields = [
            "user_id",
            "name",
            "profile_picture_url",
            "full_name",
            "linkedin_profile",
            "github_profile",
            "area_of_expertise",
            "tags",
            "education_level_display",
            "followers_count",
            "following_count",
            "is_followed_by_request_user",
        ]
        read_only_fields = fields

    def get_profile_picture_url(self, obj):
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

    def get_is_followed_by_request_user(self, obj):
        request_obj = self.context.get("request", None)
        if request_obj and hasattr(request_obj, "user") and request_obj.user:
            if getattr(request_obj.user, "is_authenticated", False):
                return obj.followers.filter(id=request_obj.user.id).exists()
        return False
