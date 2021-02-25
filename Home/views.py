from django.shortcuts import render
from django.http import HttpResponse

def homeView(request):
    return render(request,"Home/home.html",context = {
    })
