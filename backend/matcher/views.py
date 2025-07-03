import json
import os
from rest_framework.decorators import api_view
from rest_framework.response import Response

#import the json data 
SKILL_DATA_PATH = os.path.join(os.path.dirname(__file__), "skill_data.json")
with open(SKILL_DATA_PATH, "r") as f:
    skill_data = json.load(f)

@api_view(['POST'])
def match_skills(request):
    skills = request.data.get('skills',[])
    result = {}

    for skill in skills:
        if skill in skill_data:
            result[skill] = skill_data.get(skill,[])
        else:
            result[skill] = {
                "careers":["No data"],
                "courses":["No data"],
                "teammates":["No data"],
            }
    return Response({"matches": result})
