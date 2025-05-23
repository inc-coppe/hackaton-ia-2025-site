# Generated by Django 5.2 on 2025-05-15 22:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_userprofile_github_profile_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprofile',
            old_name='position',
            new_name='full_name',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='gender',
        ),
        migrations.AddField(
            model_name='userprofile',
            name='accepted_terms',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='motivation',
            field=models.JSONField(default=list),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='phone',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='portfolio_url',
            field=models.URLField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='share_contacts',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='special_needs',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='education_level',
            field=models.CharField(choices=[('EMI', 'Ensino Médio Incompleto'), ('EMC', 'Ensino Médio Completo'), ('GC', 'Graduação Completa'), ('GI', 'Graduação Incompleta'), ('PGC', 'Pós-Graduação Completa'), ('PGI', 'Pós-Graduação Incompleta'), ('MC', 'Mestrado Completo'), ('MI', 'Mestrado Incompleto'), ('DC', 'Doutorado Completo'), ('DI', 'Doutorado Incompleto'), ('PDC', 'Pós-Doutorado Completo'), ('PDI', 'Pós-Doutorado Incompleto')], max_length=3),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='github_profile',
            field=models.URLField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='linkedin_profile',
            field=models.URLField(blank=True, max_length=255, null=True),
        ),
    ]
