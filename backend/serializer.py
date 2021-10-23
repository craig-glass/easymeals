from rest_framework import serializers
from .models import MealPack


class MealPackSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MealPack
        fields = '__all__'