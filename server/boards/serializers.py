from rest_framework import serializers
from .models import Order


class PizzaOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ("id", "pizza_order_address", "pizza_order_email", "pizza_orderer",
                  "pizza_variation", "pizza_order_size")
