from django.db import models

# Create your models here.
class Category(models.Model):
  name = models.CharField(max_length=30)
  def __str__(self):
    return self.name

FEATURED = [
    ('yes', 'yes'),
    ('no', 'no'),
   ]
STATUS = [
    ('draft', 'draft'),
    ('published', 'published'),
   ]

class Cars(models.Model):
  title = models.CharField(max_length=50)
  link = models.CharField(max_length=1000, blank=True)
  image = models.ImageField(upload_to="image", default="../static/default_avatar.png")
  category = models.ForeignKey(Category , related_name='category', on_delete=models.PROTECT )
  featured = models.CharField(max_length=10 , choices=FEATURED)
  status = models.CharField(max_length=10 , default="draft" , choices=STATUS)
  publish_date = models.DateTimeField(auto_now_add=True)
  
  def __str__(self):
        return f'{self.title}'
  class Meta:
        ordering = ['category','title']
        
class FirmenInfos(models.Model):
  wichtigeInfo = models.CharField(max_length=1000, blank=True)
  email = models.CharField(max_length=100)
  phone = models.CharField(max_length=20, blank=True)
  adresse = models.CharField(max_length=150, blank=True)
  facebookLink = models.CharField(max_length=1000, blank=True)
  twitterLink = models.CharField(max_length=1000, blank=True)
  
  def __str__(self):
        return f'wichtige info'
       
class OpeningHours(models.Model):
    day = models.CharField(max_length=20)
    hours = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.day