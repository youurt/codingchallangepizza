# Generated by Django 3.1.6 on 2021-02-02 13:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('boards', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pizza',
            name='id',
        ),
        migrations.AlterField(
            model_name='pizza',
            name='order',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='boards.order'),
        ),
    ]
