from django.db import models
from products.models import Product

# Create your models here.
class Waste(models.Model):
    amount = models.PositiveIntegerField()
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    reason_choices=[
        ('Expired', 'Expired'),
        ('Misused', 'Misused'),
        ('Stolen', 'Stolen'),
    ]
    reason=models.CharField(max_length=7,choices=reason_choices)
    date = models.DateField()

    def __str__(self):
        return self.product.name + ' ' + self.reason + ' ' + str(self.date)

    """def json(self):
        return{
            'id':self.id,
            'amount':self.amount,
            'reason':self.reason,
            'date':self.date,
            'product': self.product.json()
        }"""