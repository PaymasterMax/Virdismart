from django.conf.urls import url
from . import views

app_name = "Blogs"

urlpatterns = [
    url("^/$",views.blogView,name = "blog")
]
