from django.contrib import admin


from .models import Order


class MakeOrder(admin.ModelAdmin):  # add this
    list_display = ("pizza_order_address", "pizza_order_email",
                    "pizza_orderer", "pizza_variation", "pizza_order_size")


admin.site.register(Order, MakeOrder)
