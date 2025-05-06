from django.urls import path
from .views import ask_professor

urlpatterns = [
    path("ask/", ask_professor),
]