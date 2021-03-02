from django.shortcuts import render
from django.http import HttpResponse

def teamView(request):
    additional_info = {
        "logged_in": True if request.user.is_authenticated else False
    }
    return render(request, "Team/team.html",{
        "additional_info":additional_info,
    })
