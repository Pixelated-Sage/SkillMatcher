from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def match_skills(request):
    skills = request.data.get('skills',[])

    recommendation = {
        "Python": ["Data Science", "Web Development", "Machine Learning"],
        "C++" : ["Game Development", "Systems Programming", "Embedded Systems"],
    }

    matched = {}
    for skill in skills:
        matched[skill] = recommendation.get(skill,[])

    return Response({"matches": matched})
