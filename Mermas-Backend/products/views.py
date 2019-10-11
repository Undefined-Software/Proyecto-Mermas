from django.shortcuts import rende
# Create your views here.
from rest_framework import generics
from rest_framework.response import Response
from products.serializers import ProductSerializer
from .models import Product
from django.shortcuts import get_object_or_404

class ProuctLlist(generics.ListCreateAPIView): #permite el listado y creación 
    queryset = Product.objects.all()
    serializer_class = ProductSerializer



