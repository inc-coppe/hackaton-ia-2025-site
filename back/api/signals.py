# api/signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import UserProfile, PendingEmail

@receiver(post_save, sender=UserProfile)
def create_pending_email(sender, instance, created, **kwargs):
    try:
        ja_tem = PendingEmail.objects.filter(user=instance.user).exists()

        deve_criar = False
        # Caso 1: perfil acabou de ser criado já com nome
        if created and instance.full_name:
            deve_criar = True
        # Caso 2: perfil foi atualizado e ficou completo
        elif instance.form_completed and not ja_tem:
            deve_criar = True

        if deve_criar and not ja_tem:
            nome = instance.full_name or getattr(instance.user, "name", "") or "participante"
            PendingEmail.objects.create(
                user=instance.user,
                full_name=instance.full_name,
                message=f"""Olá, {nome}!
Obrigado por se inscrever no Hackathon IA 2025!

Para acompanhar todas as atualizações do evento, entre agora no nosso servidor do Discord: Hackathon IA Coppe / UFRJ

Por lá, você encontrará:

Canais de dúvidas e apoio técnico
Networking com outros participantes
Divulgação de novidades e materiais do evento

Não perca nada! Nos vemos lá.
"""
            )
            
    