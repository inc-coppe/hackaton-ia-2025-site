#!/usr/bin/env python3
import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

from api.models import PendingEmail
from django.core.mail import send_mail

def send_pending_emails():
    emails = PendingEmail.objects.filter(status=0)
    for e in emails:
        # envia o email (aqui você pode usar send_mail ou outro serviço)
        send_mail(
            subject="Hackathon IA 2025",
            message=e.message,
            from_email="inc@incubadora.coppe.ufrj.br",
            recipient_list=[e.user.email],
        )
        e.status = 1
        e.save()
        print(f"Email enviado para {e.user.email}")

if __name__ == "__main__":
    send_pending_emails()