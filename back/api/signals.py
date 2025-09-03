from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import UserProfile, PendingEmail

@receiver(post_save, sender=UserProfile)
def create_pending_email(sender, instance, created, **kwargs):
    user_email = instance.user.email  # <-- pegar do User, não do UserProfile
    print(f"Signal chamado! created={created}, user={user_email}")
    if created:
        
        if instance.full_name:
            PendingEmail.objects.get_or_create(
                user=instance.user,
                defaults={
                    "full_name": instance.full_name,
                    "message": f"Olá, {instance.full_name}!",
                }
            )
    else:
        # Se já existia, mas só agora recebeu um full_name
        if instance.full_name and not PendingEmail.objects.filter(user=instance.user).exists():
            PendingEmail.objects.create(
                user=instance.user,
                full_name=instance.full_name,
                message=f"Olá, {instance.full_name}!"
            )
