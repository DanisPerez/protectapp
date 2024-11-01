# Generated by Django 5.1.1 on 2024-10-22 06:00

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monitor', '0012_remove_grabacionespantalla_ruta_grabacion_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='capturaspantalla',
            name='ruta_captura',
        ),
        migrations.AddField(
            model_name='capturaspantalla',
            name='archivo_captura',
            field=models.ImageField(default='capturas/default.png', upload_to='capturas/pantalla/'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='capturaspantalla',
            name='fecha',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='capturaspantalla',
            name='hora',
            field=models.TimeField(default=django.utils.timezone.now),
        ),
        migrations.CreateModel(
            name='FotosDispositivo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('archivo_foto', models.ImageField(upload_to='fotos/')),
                ('fecha', models.DateField(auto_now_add=True)),
                ('hora', models.TimeField(default=django.utils.timezone.now)),
                ('dispositivo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='monitor.dispositivo')),
            ],
        ),
    ]
