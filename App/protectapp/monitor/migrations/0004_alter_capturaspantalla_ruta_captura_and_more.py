# Generated by Django 5.1.1 on 2024-10-03 22:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monitor', '0003_auto_20241003_1542'),
    ]

    operations = [
        migrations.AlterField(
            model_name='capturaspantalla',
            name='ruta_captura',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='contactos',
            name='nombre',
            field=models.CharField(max_length=80),
        ),
        migrations.AlterField(
            model_name='dispositivo',
            name='modelo',
            field=models.CharField(max_length=80),
        ),
        migrations.AlterField(
            model_name='dispositivo',
            name='nombre',
            field=models.CharField(max_length=80),
        ),
        migrations.AlterField(
            model_name='fotos',
            name='ruta_foto',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='grabacionesllamadas',
            name='ruta_grabacion',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='grabacionespantalla',
            name='ruta_grabacion',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='contraseña',
            field=models.CharField(max_length=80),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='email',
            field=models.EmailField(max_length=80, unique=True),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='nombre',
            field=models.CharField(max_length=80),
        ),
        migrations.AlterField(
            model_name='videos',
            name='ruta_video',
            field=models.CharField(max_length=100),
        ),
    ]