from django.shortcuts import render
from .models import Cars, Category , FirmenInfos , OpeningHours
# Create your views here.

def home(request):
  featured = Cars.objects.filter(status="published", featured="yes")
  categorys = Category.objects.all()
  firmaInfo = FirmenInfos.objects.all().first()
  openHours = OpeningHours.objects.all()[:7]
  context = {
       'featured': featured,
       'category': categorys,
       'firmaInfo': firmaInfo,
       'openHours': openHours,
   }
  return render(request, 'index.html', context)

def galerie(request):
  allCars = Cars.objects.filter(status="published")
  categorys = Category.objects.all()
  firmaInfo = FirmenInfos.objects.all().first()
  openHours = OpeningHours.objects.all()[:7]
  context = {
       'allCars': allCars,
       'category': categorys,
       'firmaInfo': firmaInfo,
       'openHours': openHours,
   }
  return render(request, 'galerie.html', context)


def about(request):
  firmaInfo = FirmenInfos.objects.all().first()
  openHours = OpeningHours.objects.all()[:7]
  context = {
       'firmaInfo': firmaInfo,
       'openHours': openHours,
       'ipInfo':request.META['REMOTE_ADDR'],
   }
  return render(request, 'about_us.html',context)


def contact(request):
  firmaInfo = FirmenInfos.objects.all().first()
  openHours = OpeningHours.objects.all()[:7]
  context = {
       'firmaInfo': firmaInfo,
       'openHours': openHours,
   }
  return render(request, 'contact.html',context)

def services(request):
  firmaInfo = FirmenInfos.objects.all().first()
  openHours = OpeningHours.objects.all()[:7]
  context = {
       'firmaInfo': firmaInfo,
       'openHours': openHours,
   }
  return render(request, 'services.html',context)