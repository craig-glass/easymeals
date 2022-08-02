from django.db import models


class MealPack(models.Model):
    name = models.CharField(max_length=20)
    calories = models.IntegerField()
    price = models.FloatField()
    description = models.CharField(max_length=50)

    def __str__(self):
        return self.name
