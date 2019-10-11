from rest_framework import serializers
from waste.models import Waste

class WasteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Waste
        fields = ('__all__')