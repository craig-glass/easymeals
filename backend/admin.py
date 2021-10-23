from django.contrib import admin
from . import models


@admin.register(models.MealPack)
class MealPackAdmin(admin.ModelAdmin):
    fields = ('name', 'calories', 'price', 'description')

