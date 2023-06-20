from django.contrib import admin
from .models import Cars, Category , FirmenInfos , OpeningHours
# Register your models here.
admin.site.register(Category)

class CarsAdmin(admin.ModelAdmin):
    list_filter = ('status', 'category','featured')
    search_fields = (
        "title",
      )

admin.site.register(Cars, CarsAdmin)

admin.site.register(FirmenInfos)
admin.site.register(OpeningHours)