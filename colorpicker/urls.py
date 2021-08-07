from . import views
from django.urls import path

urlpatterns = [
    path('', views.ColorList.as_view(), name='home'),
    path('updatePattle', views.sendPattle, name='updatePattle')
    # path('', views.ColorList, name='home'),
]