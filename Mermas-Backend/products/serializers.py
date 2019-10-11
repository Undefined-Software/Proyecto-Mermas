from rest_framework import serializers
from products.models import Product

"""class ProductListSerializer(serializers.ListSerializer):
    def create(self, validated_data):
        print("aH VEDA")
        #books = [Product(**item) for item in validated_data]
        books=[ProductSerializer(item)for item in validated_data]
        return Product.objects.bulk_create(books)"""

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('__all__')
        #list_serializer_class = ProductListSerializer