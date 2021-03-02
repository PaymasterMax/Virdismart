from django.contrib.auth import authenticate,login,logout
from django.shortcuts import render,redirect
from django.http import HttpResponse
import json

def loginView(request):
    next = request.GET.get('next') if request.GET.get('next') else "/"
    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(email = email, password = password)

        if user is not None:
            login(request, user)
            return HttpResponse(json.dumps({
                    "redirect":next,
            }),content_type = "application/json")

        else:
            return HttpResponse(json.dumps({
                    "errors":"email or password failed",
            }),content_type = "application/json")

    return render(request,"Accounts/login.html", context = {
    })

def logoutView(request):
    user = request.user
    if user is not None:
        logout(request)
    return redirect("home:home")
