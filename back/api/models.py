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
    EDUCATION_CHOICES = [
        ("EMI", "Ensino Médio Incompleto"),
        ("EMC", "Ensino Médio Completo"),
        ("GC", "Graduação Completa"),
        ("GI", "Graduação Incompleta"),
        ("PGC", "Pós-Graduação Completa"),
        ("PGI", "Pós-Graduação Incompleta"),
        ("MC", "Mestrado Completo"),
        ("MI", "Mestrado Incompleto"),
        ("DC", "Doutorado Completo"),
        ("DI", "Doutorado Incompleto"),
        ("PDC", "Pós-Doutorado Completo"),
        ("PDI", "Pós-Doutorado Incompleto"),
    ]

    MOTIVATION_CHOICES = [
        ("PARTNERS", "Encontro com grandes parceiros"),
        ("AI", "Temática IA"),
        ("HEALTH", "Temática Saúde"),
        ("UFRJ", "Vontade de interagir mais com a UFRJ"),
        ("HACKATHON", "O fato de ser um Hackathon e poder desenvolver uma solução"),
    ]

    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255)
    birth_date = models.DateField()
    linkedin_profile = models.URLField(max_length=255, blank=True, null=True)
    github_profile = models.URLField(max_length=255, blank=True, null=True)
    education_level = models.CharField(max_length=3, choices=EDUCATION_CHOICES)
    institution = models.CharField(max_length=255)
    phone = models.CharField(max_length=20, blank=True, null=True)
    area_of_expertise = models.CharField(max_length=255)
    portfolio_url = models.URLField(max_length=255, blank=True, null=True)
    special_needs = models.TextField(blank=True, null=True)
    motivation = models.JSONField(default=list)  # Store multiple motivations
    accepted_terms = models.BooleanField(default=False)
    share_contacts = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    form_completed = models.BooleanField(default=False)
    tags = models.JSONField(default=list, blank=True)

    class Meta:
        db_table = "user_profiles"
