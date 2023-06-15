from django.shortcuts import render
from .models import Cars, Category
# Create your views here.

def home(request):
  featured = Cars.objects.filter(status="published", featured="yes")
  categorys = Category.objects.all()
  context = {
       'featured': featured,
       'category': categorys,
   }
  return render(request, 'index.html', context)