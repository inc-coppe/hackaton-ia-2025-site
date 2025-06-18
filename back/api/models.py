from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.db import models
from django.conf import settings


class CustomUserManager(BaseUserManager):
    def create_user(self, email, name, password=None, profile_picture=None):
        if not email:
            raise ValueError("O e-mail é obrigatório!")
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, profile_picture=profile_picture)
        if password:
            user.set_password(password)
        else:
            user.set_unusable_password()
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password, profile_picture=None):
        if not password:
            raise ValueError("Superusuários devem ter uma senha.")
        user = self.create_user(
            email, name, password=password, profile_picture=profile_picture
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    profile_picture = models.URLField(blank=True, null=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    following = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name="followers",
        blank=True,
        symmetrical=False,
    )

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    def __str__(self):
        return self.email


class UserProfile(models.Model):
    EDUCATION_CHOICES = [
        ("EMI", "Ensino Médio Incompleto"),
        ("EMC", "Ensino Médio Completo"),
        ("GI", "Graduação Incompleta"),
        ("GC", "Graduação Completa"),
        ("PGI", "Pós-Graduação Incompleta"),
        ("PGC", "Pós-Graduação Completa"),
        ("MI", "Mestrado Incompleto"),
        ("MC", "Mestrado Completo"),
        ("DI", "Doutorado Incompleto"),
        ("DC", "Doutorado Completo"),
        ("PDI", "Pós-Doutorado Incompleto"),
        ("PDC", "Pós-Doutorado Completo"),
    ]
    MOTIVATION_CHOICES = [
        ("PARTNERS", "Encontro com grandes parceiros"),
        ("AI", "Temática IA"),
        ("HEALTH", "Temática Saúde"),
        ("UFRJ", "Vontade de interagir mais com a UFRJ"),
        ("HACKATHON", "O fato de ser um Hackathon e poder desenvolver uma solução"),
    ]

    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, related_name="userprofile"
    )
    full_name = models.CharField(max_length=255)
    cpf = models.CharField(max_length=11, unique=True, null=True, blank=True)
    birth_date = models.DateField()
    organization = models.CharField(max_length=255, blank=True, null=True)
    institution = models.CharField(max_length=255)
    education_level = models.CharField(max_length=3, choices=EDUCATION_CHOICES)
    github_profile = models.URLField(max_length=255, default="")  # Added default
    linkedin_profile = models.URLField(max_length=255, default="")  # Added default
    phone = models.CharField(max_length=20, blank=True, null=True)
    area_of_expertise = models.CharField(max_length=255)
    portfolio_url = models.URLField(max_length=255, blank=True, null=True)
    special_needs = models.TextField(blank=True, null=True)
    motivation = models.JSONField(default=list)
    accepted_terms = models.BooleanField(default=False)
    share_contacts = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    form_completed = models.BooleanField(default=False)
    tags = models.JSONField(default=list, blank=True)

    class Meta:
        db_table = "user_profiles"

    def __str__(self):
        return f"Profile of {self.user.email}"
