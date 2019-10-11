from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=50,default='')
    amount = models.PositiveIntegerField(default=0)
    price = models.FloatField(default=0.0)
    code = models.CharField(max_length=10,default='',unique=True)
    image = models.ImageField(default='')

    def __str__(self):
        return self.name