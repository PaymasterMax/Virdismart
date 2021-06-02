from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm

class VirdisForm(UserCreationForm):
    class Meta:
        model = get_user_model()
        fields = [
            'email',
            'username',
            'password1',
            'password2'
        ]
