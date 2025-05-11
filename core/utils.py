from openai import OpenAI
from django.conf import settings
from .prompts import SYSTEM_PROMPT

client = OpenAI(api_key=settings.OPENAI_API_KEY)

def generate_response(user_input: str, history=None) -> str:
    try:
        messages = [{"role": "system", "content": SYSTEM_PROMPT}]
        if history:
            messages.extend(history)
        messages.append({"role": "user", "content": user_input})

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            temperature=0.8,
            max_tokens=500,
        )

        return response.choices[0].message.content

    except Exception as e:
        print(f"OpenAI API Error: {e}")
        return "Hmm...Professor Past is momentarily unavailable. Please try again soon!"