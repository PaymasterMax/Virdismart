from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.shortcuts import render


def homeView(request):
    additional_info = {
        "logged_in": True if request.user.is_authenticated else False
    }
    return render(request,"Home/home.html",context = {
            "additional_info":additional_info
    })

@login_required(login_url = "/accounts/")
def statsView(request):
    additional_info = {
        "logged_in": True if request.user.is_authenticated else False
    }
    return render(request, "Home/stats.html",context={
        "additional_info":additional_info
    })
