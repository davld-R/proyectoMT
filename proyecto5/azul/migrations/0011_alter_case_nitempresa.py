# Generated by Django 4.1.7 on 2023-03-04 00:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('azul', '0010_encuesta'),
    ]

    operations = [
        migrations.AlterField(
            model_name='case',
            name='nitempresa',
            field=models.CharField(max_length=100, verbose_name='Nit Empresa'),
        ),
    ]
