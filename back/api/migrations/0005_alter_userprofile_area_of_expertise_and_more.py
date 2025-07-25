# Generated by Django 5.2.2 on 2025-06-24 21:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_customuser_profile_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='area_of_expertise',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='birth_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='education_level',
            field=models.CharField(blank=True, choices=[('EMI', 'Ensino Médio Incompleto'), ('EMC', 'Ensino Médio Completo'), ('GI', 'Graduação Incompleta'), ('GC', 'Graduação Completa'), ('PGI', 'Pós-Graduação Incompleta'), ('PGC', 'Pós-Graduação Completa'), ('MI', 'Mestrado Incompleto'), ('MC', 'Mestrado Completo'), ('DI', 'Doutorado Incompleto'), ('DC', 'Doutorado Completo'), ('PDI', 'Pós-Doutorado Incompleto'), ('PDC', 'Pós-Doutorado Completo')], max_length=3, null=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='full_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='github_profile',
            field=models.URLField(blank=True, default='', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='institution',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='linkedin_profile',
            field=models.URLField(blank=True, default='', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='motivation',
            field=models.JSONField(blank=True, default=list),
        ),
    ]
