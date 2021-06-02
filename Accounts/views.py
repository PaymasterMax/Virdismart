from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.auth import authenticate,login,logout
from django.shortcuts import render,redirect
from django.core.mail import send_mail
from django.http import HttpResponse
from .models import Virdismart
from .forms import VirdisForm
import json, re
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
def signupView(request):
    if request.method =="POST":
        form = VirdisForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse(json.dumps({
                    "redirect":"/accounts/",
            }),content_type = "application/json")
        else:
            return HttpResponse(json.dumps({
                    "errors":form.errors,
            }),content_type = "application/json")

    return render(request, "Accounts/signup.html", context = {

    })

def activateAccount(request):
    if request.method == "POST":
        email = request.POST['email']
        name = re.search(pattern,string)[0].title
        res = send_mail("Account activation",name + " please activate your account here .",email,[],html_message = "")
def resetPassword(request):
    if request.method == "POST":
        email = request.POST['email']
        obj = Virdismart.objects.get(email = email)
        print(email)
        token = PasswordResetTokenGenerator().make_token(obj)
        pattern = "[a-zA-Z]+"
        name = re.search(pattern,email)[0].title
        res = send_mail("Account activation"," please reset your account here "+token,email,[email],html_message = "")
        print(res)
        return HttpResponse(json.dumps({
                "infor":"reset link sent to your email",
        }),content_type = "application/json")
    return render(request, "Accounts/reset.html",context = {

    })


def logoutView(request):
    user = request.user
    if user is not None:
        logout(request)
    return redirect("home:home")
