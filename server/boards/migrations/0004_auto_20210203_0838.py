# Generated by Django 3.1.6 on 2021-02-03 08:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boards', '0003_auto_20210202_1330'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='adress',
            new_name='address',
        ),
        migrations.AddField(
            model_name='order',
            name='size',
            field=models.CharField(choices=[('large', 'large'), ('medium', 'medium'), ('small', 'small')], default='small', max_length=6),
        ),
        migrations.DeleteModel(
            name='Pizza',
        ),
    ]
