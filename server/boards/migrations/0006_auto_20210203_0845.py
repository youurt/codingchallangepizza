# Generated by Django 3.1.6 on 2021-02-03 08:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('boards', '0005_order_customer'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Order',
            new_name='PizzaOrder',
        ),
    ]
