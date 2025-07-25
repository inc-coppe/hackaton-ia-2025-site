from django.core.management.base import BaseCommand
import csv
from api.models import UserProfile

class Command(BaseCommand):
    help = "Exporta inscritos para CSV"

    def handle(self, *args, **kwargs):
        profiles = UserProfile.objects.all()
        with open("inscritos_hackathon.csv", "w", newline="", encoding="utf-8") as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(["user_id", "full_name", "user_name"])
            for profile in profiles:
                writer.writerow([profile.user.id, profile.full_name, profile.user.name])

        self.stdout.write(self.style.SUCCESS("Arquivo CSV criado: inscritos_hackathon.csv"))
