from django.urls import path, include,re_path
from . import views

urlpatterns = [
    path('waste/list',views.ProductList.as_view()),
    path('waste/<str:pk>/', views.ProductDetail.as_view()),
    path('waste/sf/<str:name>/<str:value>/', views.FilterProductView.as_view()),
]