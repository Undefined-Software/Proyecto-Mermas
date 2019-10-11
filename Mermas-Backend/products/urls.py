from django.urls import path, include,re_path
from . import views

urlpatterns = [
    path('products/', views.ProductList.as_view()),
    path('products/<int:pk>/', views.ProductDetail.as_view()),
    #path('products/ss/<str:name>/<str:amount>/', views.RetrieveProductView.as_view()),
    path('products/sf/<str:name>/<str:value>/', views.FilterProductView.as_view()),
    #re_path('products/mf/(?P<slug>[-\w]+)/',views.MultiFilterProductView.as_view(),name='field_list'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]