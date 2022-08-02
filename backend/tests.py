from django.test import TestCase
from backend.models import MealPack


class MealPackTestCase(TestCase):
    def setUp(self):
        MealPack.objects.create(name="pack 9", calories=3000,
                                price=90, description="pack containing 3000 calories")
        MealPack.objects.create(name="pack 10", calories=4000,
                                price=100, description="pack containing 4000 calories")

    def test_mealpacks_correct(self):
        pack9 = MealPack.objects.get(name="pack 9")
        pack10 = MealPack.objects.get(name="pack 10")
        self.assertEqual(pack9.price, 90)
        self.assertEqual(pack10.calories, 4000)
        self.assertEqual(str(pack9), "pack 9")
        self.assertEqual(str(pack10), "pack 10")
