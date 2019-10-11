from rest_framework import generics
from rest_framework.response import Response
from waste.serializers import WasteSerializer
from .models import Waste
from django.shortcuts import get_object_or_404, get_list_or_404

# Create your views here.
class ProductList(generics.ListCreateAPIView): #permite el listado y creación 
    queryset = Waste.objects.all()
    serializer_class = WasteSerializer

#Permite la actualización y destrucción de un elemento por 1 id 
#formato path/id
class ProductDetail(generics.RetrieveUpdateDestroyAPIView): 
    queryset = Waste.objects.all()
    serializer_class = WasteSerializer 

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
    queryset = Waste.objects.all()
    serializer_class = WasteSerializer 