from rest_framework import viewsets
from .serializers import PizzaOrderSerializer
from .models import Order


class OrderView(viewsets.ModelViewSet):
    serializer_class = PizzaOrderSerializer
    queryset = Order.objects.all()
