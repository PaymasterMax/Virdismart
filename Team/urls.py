from django.conf.urls import url
from . import views

app_name = "Team"

urlpatterns = [
    url("^/$",views.teamView,name = "team")
]
