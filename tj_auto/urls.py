from django.urls import path
# from .views import 
from .views import home

urlpatterns = [
   path('', home , name='home'),
   
          
]