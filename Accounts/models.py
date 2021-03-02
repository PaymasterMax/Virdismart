from django.contrib.auth.models import AbstractBaseUser,BaseUserManager
from django.db import models

class VrdisManager(BaseUserManager):
    def create_user(self,email,username,password = None,is_admin = False,is_staff = True,is_active = True):
        if username is None:
            raise ValueError("username cannot be None")
        if email is None:
            raise ValueError("email cannot be None")
        user = self.model(
            email = self.normalize_email(email),
            username = username,
        )
        user.set_password(password)
        user.is_admin = is_admin
        user.is_active = is_active
        user.is_staff = is_staff
        user.save()
        return user

    def create_superuser(self,email,username,password = None):
        user = self.create_user(
        email = email,
        username = username,
        password = password,
        is_active = True,
        is_admin = True,
        is_staff = True,
        )
        return user

class Virdismart(AbstractBaseUser):
    email = models.EmailField(unique = True,max_length = 120)
    username = models.CharField(max_length  =40)
    last_login = models.DateTimeField(auto_now = True)
    is_admin = models.BooleanField(default = False)
    is_staff = models.BooleanField(default = True)
    date_joined = models.DateTimeField(auto_now_add = True)
    is_active = models.BooleanField(default = False)

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = [
            'username',
    ]

    objects = VrdisManager()

    def __str__(self):
        return self.username
    def get_short_name(self):
        return self.email

    def get_full_name(self):
        return self.email

    def has_perm(self,perm,obj = None):
        return self.is_admin

    def has_module_perms(self,app_label):
        return True
