# api/signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import UserProfile, PendingEmail

@receiver(post_save, sender=UserProfile)
def create_pending_email(sender, instance, created, **kwargs):
    if created and instance.full_name:
        PendingEmail.objects.create(
            user=instance.user,
            full_name=instance.full_name,
            message=f"Olá, {instance.full_name}!"
        )