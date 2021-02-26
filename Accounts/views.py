from django.shortcuts import render
from django.http import HttpResponse

def loginView(request):
    return render(request,"Accounts/login.html", context = {
    })
