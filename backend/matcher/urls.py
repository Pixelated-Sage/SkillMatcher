from django.urls import path
from .views import match_skills

urlpatterns = [
    path('match-skills/', match_skills),
]
