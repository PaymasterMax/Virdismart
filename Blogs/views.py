from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.shortcuts import render

# @login_required(login_url = "/accounts/")
def blogView(request):
    additional_info = {
        "logged_in": True if request.user.is_authenticated else False
    }
    return render(request, "Home/home.html",context={
        "additional_info":additional_info
    })
