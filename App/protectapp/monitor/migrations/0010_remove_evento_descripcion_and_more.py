# Generated by Django 5.1.1 on 2024-10-19 15:35

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monitor', '0009_verificacionpermisos_clave_sistema_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='evento',
            name='descripcion',
        ),
        migrations.RemoveField(
            model_name='historialevento',
            name='usuario',
        ),
        migrations.RemoveField(
            model_name='verificacionpermisos',
            name='clave_sistema',
        ),
        migrations.RemoveField(
            model_name='verificacionpermisos',
            name='critico',
        ),
        migrations.RemoveField(
            model_name='verificacionpermisos',
            name='tipo_permiso',
        ),
        migrations.AddField(
            model_name='evento',
            name='detalles',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='evento',
            name='hora',
            field=models.TimeField(default='00:00:00'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='evento',
            name='tipo_evento',
            field=models.CharField(default='00:00:00', max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='capturaspantalla',
            name='ruta_captura',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='contactos',
            name='nombre',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='contactos',
            name='numero',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='dispositivo',
            name='modelo',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='dispositivo',
            name='nombre',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='evento',
            name='fecha',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='fotos',
            name='ruta_foto',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='grabacionesllamadas',
            name='ruta_grabacion',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='grabacionespantalla',
            name='ruta_grabacion',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='historialevento',
            name='detalles',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='historialevento',
            name='fecha',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='historialevento',
            name='hora',
            field=models.TimeField(),
        ),
        migrations.AlterField(
            model_name='llamadas',
            name='numero',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='llamadas',
            name='tipo',
            field=models.CharField(choices=[('entrante', 'Entrante'), ('saliente', 'Saliente')], max_length=10),
        ),
        migrations.AlterField(
            model_name='mensajes',
            name='numero',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='mensajes',
            name='tipo',
            field=models.CharField(choices=[('recibido', 'Recibido'), ('enviado', 'Enviado')], max_length=10),
        ),
        migrations.AlterField(
            model_name='verificacionpermisos',
            name='estado',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='videos',
            name='ruta_video',
            field=models.CharField(max_length=255),
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('contraseña', models.CharField(max_length=100)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
