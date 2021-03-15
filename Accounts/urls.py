from django.contrib.auth import views as auth_views
from django.conf.urls import url
from . import views
app_name = "Accounts"

urlpatterns = [
    url("^$",views.loginView,name = "account"),
    url("^signup/$",views.signupView,name = "signup"),
    url("^reset/$",views.resetPassword,name = "reset"),
    url("^activate/$",views.activateAccount,name = "activate"),
    url("^logout/$",views.logoutView,name = "logout"),
]
