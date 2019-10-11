from django.urls import path, include
from . import views

urlpatterns = [
    path('products/', views.ProductList.as_view()),
    path('products/<int:pk>/', views.ProductDetail.as_view()),
    path('products/ss/<str:name>/<str:amount>/', views.RetrieveProductView.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]