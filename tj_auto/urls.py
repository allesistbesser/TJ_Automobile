from django.urls import path
# from .views import 
from .views import home , galerie

urlpatterns = [
   path('', home , name='home'),
   path('galerie/', galerie , name='galerie'),
   
          
]