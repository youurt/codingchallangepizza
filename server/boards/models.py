from django.db import models

# Create your models here.


SIZE = (("large", "large"), ("medium", "medium"), ("small", "small"))
PIZZA = (("diavolo", "diavolo"), ("salami", "salami"),
         ("margarita", "margarita"))


class Order(models.Model):
    pizza_order_address = models.CharField(max_length=255)
    pizza_order_email = models.EmailField(max_length=255)
    pizza_orderer = models.CharField(
        max_length=255, default="customer_exmample")
    pizza_variation = models.CharField(
        max_length=10, choices=PIZZA, default="diavolo")
    pizza_order_size = models.CharField(
        max_length=6, choices=SIZE, default="small")

    def __str__(self):
        return self.pizza_orderer
