from rest_framework import generics
from rest_framework.response import Response

from products.serializers import ProductSerializer
from .models import Product
from django.shortcuts import get_object_or_404

class ProductList(generics.ListCreateAPIView): #permite el listado y creación 
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView): #Permite la actualización y destrucción de un elemento por 1 id
    queryset = Product.objects.all()
    serializer_class = ProductSerializer 

class MultipleFieldLookupMixin(object):
    def get_object(self):
        queryset = self.get_queryset()
        queryset = self.filter_queryset(queryset)
        filter = {}
        for field in self.lookup_fields:
            if self.kwargs[field]:
                filter[field] = self.kwargs[field]
        obj = get_object_or_404(queryset, **filter)
        self.check_object_permissions(self.request, obj)
        return obj   

class RetrieveProductView(MultipleFieldLookupMixin, generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_fields = ['name', 'amount']