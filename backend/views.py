from django.shortcuts import render
from rest_framework import viewsets
from .serializer import MealPackSerializer
from .models import MealPack


class MealPackViewSet(viewsets.ModelViewSet):
    serializer_class = MealPackSerializer
    queryset = MealPack.objects.all()
