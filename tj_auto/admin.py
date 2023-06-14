from django.contrib import admin
from .models import Cars, Category
# Register your models here.
admin.site.register(Category)

class CarsAdmin(admin.ModelAdmin):
    list_filter = ('status', 'category','featured')
    search_fields = (
        "title",
      )

admin.site.register(Cars, CarsAdmin)