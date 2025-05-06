from django.urls import path
from .views import ask_professor, chat_view

urlpatterns = [
    path("ask/", ask_professor),
    path("", chat_view, name="chat"),
]