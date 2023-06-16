from django.urls import path
# from .views import 
from .views import home , galerie , about , contact

urlpatterns = [
   path('', home , name='home'),
   path('galerie/', galerie , name='galerie'),
   path('about/', about , name='about'),
   path('contact/', contact , name='contact'),
   
          
]