from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
import pymongo

def homeView(request):
    additional_info = {
        "logged_in": True if request.user.is_authenticated else False
    }
    return render(request,"Home/home.html",context = {
            "additional_info":additional_info
    })
def get_top_10():
    client = pymongo.MongoClient('mongodb+srv://codem:1100111@virdismart.nx3p6.mongodb.net/Virdsmart?retryWrites=true&w=majority')
    db = client['Virdismart']
    collection_user = db['users']
    top_10 = collection_user.find({},{'_id':0,'fname':1,'lname':1,'points':1,'massThrown':1}).sort('points',-1).limit(10)
    return list(top_10)

# @login_required(login_url = "/accounts/")
def statsView(request):
    additional_info = {
        "logged_in": True if request.user.is_authenticated else False,
    }
    return render(request, "Home/stats.html",context={
        "additional_info":additional_info,
        "top":get_top_10()
    })

def teamView(request):
    additional_info = {
        "logged_in": True if request.user.is_authenticated else False
    }
    return render(request, "Home/team.html",{
        "additional_info":additional_info,
    })
