# Generated by Django 5.2.2 on 2025-06-05 20:20

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('name', models.CharField(max_length=255)),
                ('profile_picture', models.URLField(blank=True, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_admin', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('following', models.ManyToManyField(blank=True, related_name='followers', to=settings.AUTH_USER_MODEL)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=255)),
                ('cpf', models.CharField(blank=True, max_length=11, null=True, unique=True)),
                ('birth_date', models.DateField()),
                ('linkedin_profile', models.URLField(blank=True, max_length=255, null=True)),
                ('github_profile', models.URLField(blank=True, max_length=255, null=True)),
                ('education_level', models.CharField(choices=[('EMI', 'Ensino Médio Incompleto'), ('EMC', 'Ensino Médio Completo'), ('GC', 'Graduação Completa'), ('GI', 'Graduação Incompleta'), ('PGC', 'Pós-Graduação Completa'), ('PGI', 'Pós-Graduação Incompleta'), ('MC', 'Mestrado Completo'), ('MI', 'Mestrado Incompleto'), ('DC', 'Doutorado Completo'), ('DI', 'Doutorado Incompleto'), ('PDC', 'Pós-Doutorado Completo'), ('PDI', 'Pós-Doutorado Incompleto')], max_length=3)),
                ('institution', models.CharField(max_length=255)),
                ('phone', models.CharField(blank=True, max_length=20, null=True)),
                ('area_of_expertise', models.CharField(max_length=255)),
                ('portfolio_url', models.URLField(blank=True, max_length=255, null=True)),
                ('special_needs', models.TextField(blank=True, null=True)),
                ('motivation', models.JSONField(default=list)),
                ('accepted_terms', models.BooleanField(default=False)),
                ('share_contacts', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('form_completed', models.BooleanField(default=False)),
                ('tags', models.JSONField(blank=True, default=list)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='userprofile', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'user_profiles',
            },
        ),
    ]
