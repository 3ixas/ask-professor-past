from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
from django_ratelimit.decorators import ratelimit

from .utils import generate_response

@csrf_exempt
@ratelimit(key='ip', rate='5/m', block=True)
def ask_professor(request):
    if getattr(request, 'limited', False):
        return JsonResponse(
            {"error": "Rate limit exceeded. Please wait a moment before trying again."},
            status=429
        )

    if request.method != "POST":
        return JsonResponse({"error": "Only POST requests are allowed."}, status=405)

    try:
        data = json.loads(request.body.decode("utf-8"))
        question = data.get("question", "").strip()

        if not question:
            return JsonResponse({"error": "Question is required."}, status=400)

        history = data.get("history", [])

        response = generate_response(question, history)

        return JsonResponse({"reply": response})

    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON."}, status=400)
    except Exception as e:
        print(f"Error in /ask: {e}")
        return JsonResponse({"error": "Internal server error."}, status=500)

def chat_view(request):
    return render(request, "core/chat.html")