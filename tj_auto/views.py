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

def galerie(request):
  allCars = Cars.objects.filter(status="published")
  categorys = Category.objects.all()
  context = {
       'allCars': allCars,
       'category': categorys,
   }
  return render(request, 'galerie.html', context)


def about(request):
  return render(request, 'about_us.html')


def contact(request):
  return render(request, 'contact.html')

def services(request):
  return render(request, 'services.html')