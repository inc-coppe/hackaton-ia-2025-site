from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import UserProfile, PendingEmail

@receiver(post_save, sender=UserProfile)
def create_pending_email(sender, instance, created, **kwargs):
    if created:
        # só cria se ainda não existir
        if not PendingEmail.objects.filter(user=instance.user).exists():
            PendingEmail.objects.create(
                user=instance.user,
                full_name=instance.full_name,
                message=f"""Olá, {instance.full_name}! 
Obrigado por se inscrever no Hackathon IA 2025!

Para acompanhar todas as atualizações do evento, entre agora no nosso servidor do Discord: Hackathon IA Coppe / UFRJ

Por lá, você encontrará:

Canais de dúvidas e apoio técnico

Networking com outros participantes

Divulgação de novidades e materiais do evento

Não perca nada! Nos vemos lá.

"""
            )
            print(f"[TESTE] PendingEmail criado para {instance.full_name}")
