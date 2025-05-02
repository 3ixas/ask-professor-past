from django.urls import path
from . import views

urlpatterns = [
    path("test-key/", views.test_key),
]