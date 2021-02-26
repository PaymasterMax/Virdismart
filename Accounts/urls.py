from django.conf.urls import url
from . import views

app_name = "Accounts"

urlpatterns = [
    url("^$",views.loginView,name = "account")
]
