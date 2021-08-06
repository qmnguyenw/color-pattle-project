from django.views import generic
from django.shortcuts import render, redirect, HttpResponse
from .models import Color
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

from django.contrib.auth.models import User

# from rest_framework import viewsets, status

@method_decorator(login_required, name='dispatch')
class ColorList(generic.ListView):
    model = Color
    # queryset = Color.objects.filter(author=request.user).order_by('-created_on')
    # queryset = Color.objects.all().order_by('-created_on')
    template_name = 'index.html'

    def get_queryset(self):
        author=self.request.user
        if author is None:
            messages.error(self.request, "User must login")
            return render(self.request,"login.html")
        else:
            return Color.objects.filter(author=self.request.user)


