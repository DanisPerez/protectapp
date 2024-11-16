# Generated by Django 5.1.1 on 2024-10-03 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monitor', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='capturaspantalla',
            name='ruta_captura',
            field=models.CharField(max_length=191),
        ),
        migrations.AlterField(
            model_name='fotos',
            name='ruta_foto',
            field=models.CharField(max_length=191),
        ),
        migrations.AlterField(
            model_name='grabacionesllamadas',
            name='ruta_grabacion',
            field=models.CharField(max_length=191),
        ),
        migrations.AlterField(
            model_name='grabacionespantalla',
            name='ruta_grabacion',
            field=models.CharField(max_length=191),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='email',
            field=models.EmailField(max_length=191, unique=True),
        ),
        migrations.AlterField(
            model_name='videos',
            name='ruta_video',
            field=models.CharField(max_length=191),
        ),
    ]