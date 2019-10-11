from rest_framework import generics
from rest_framework.response import Response
from products.serializers import ProductSerializer #, ProductListSerializer
from .models import Product
from django.shortcuts import get_object_or_404, get_list_or_404

class ProductList(generics.ListCreateAPIView): #permite el listado y creación 
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

#Permite la actualización y destrucción de un elemento por 1 id 
#formato path/id
class ProductDetail(generics.RetrieveUpdateDestroyAPIView): 
    queryset = Product.objects.all()
    serializer_class = ProductSerializer 

"""class MultipleFieldLookupMixin(object): 
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
    lookup_fields = ['name', 'amount']"""

class FieldLookupMixin(object):
    def get_object(self):
        queryset = self.get_queryset()
        queryset = self.filter_queryset(queryset)
        filter = {}
        obj=[]
        filter[self.kwargs['name']]=self.kwargs['value']
        obj+=get_list_or_404(queryset, **filter)
        print(obj)
        self.check_object_permissions(self.request, obj)
        return obj[0]


#Permite la busqueda en base a cualquier campo el formato de entrada es "path/nombredelcampo/valordelcampo"
#si el nombre del campo esta mal marca error 
class FilterProductView(FieldLookupMixin,generics.RetrieveAPIView): 
    queryset = Product.objects.all()
    serializer_class = ProductSerializer #(child=ProductSerializer()).create(validated_data=queryset)#(queryset,many=True)
    #print("-------------------------sali-------------------------")
"""
class MultiFieldLookupMixin(object):
    def get_object(self):
        queryset = self.get_queryset()
        queryset = self.filter_queryset(queryset)
        filter = {}
        l=self.kwargs['field_list']
        return l[1]
        for i in range(0,len(self.kwargs),2):
            if (self.kwargs['field_list'].[i]!=None and self.kwargs['field_list'].[i+1]!=None):
                filter[self.kwargs.field_list[i]]=self.kwargs.field_list[i+1]
        obj = get_object_or_404(queryset, **filter)
        self.check_object_permissions(self.request, obj)
        return obj   


class MultiFilterProductView(MultiFieldLookupMixin,generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer"""
