from django.shortcuts import render
from django.http import HttpResponse

def teamView(request):
    return HttpResponse("Team")
