from django.conf.urls import url
from . import views

app_name = "home"

urlpatterns = [
    url("^$",views.homeView,name = "home"),
    url("^stats/$",views.statsView,name = "stats"),
]
