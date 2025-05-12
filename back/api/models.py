from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models


class CustomUserManager(BaseUserManager):
    def create_user(self, email, name, profile_picture=None):
        if not email:
            raise ValueError("O e-mail é obrigatório!")
        user = self.model(
            email=self.normalize_email(email),
            name=name,
            profile_picture=profile_picture,
        )
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, profile_picture=None):
        user = self.create_user(email, name, profile_picture)
        user.is_admin = True
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    profile_picture = models.URLField(blank=True, null=True)

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    def __str__(self):
        return self.email


class UserProfile(models.Model):
    GENDER_CHOICES = [
        ("M", "Masculino"),
        ("F", "Feminino"),
        ("O", "Outro"),
        ("N", "Prefiro não dizer"),
    ]

    EDUCATION_CHOICES = [
        ("EM", "Ensino Médio"),
        ("G", "Graduação"),
        ("P", "Pós-Graduação"),
        ("M", "Mestrado"),
        ("D", "Doutorado"),
        ("PD", "Pós-Doutorado"),
    ]

    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    birth_date = models.DateField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    institution = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    education_level = models.CharField(max_length=2, choices=EDUCATION_CHOICES)
    area_of_expertise = models.CharField(max_length=255)
    github_profile = models.URLField(
        max_length=255, blank=True, null=True, default=""
    )  # Changed field
    linkedin_profile = models.URLField(
        max_length=255, blank=True, null=True, default=""
    )  # Changed field
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    form_completed = models.BooleanField(default=False)

    class Meta:
        db_table = "user_profiles"
