# Ask Professor Past

> *An AI-powered history chatbot with charm, wit, and scholarly wisdom.*

<img width="984" alt="Image" src="https://github.com/user-attachments/assets/0d19cfda-a6e5-43d7-919d-c58065f42e17" />

---

## 📜 Overview

**Ask Professor Past** is a personality-driven AI chatbot that allows users to explore historical questions through rich, conversational dialogue. Powered by the OpenAI GPT API, the chatbot responds as **Professor Algernon Pastworthy III**: an eccentric, charming, and slightly dramatic Oxford-style history professor.

Designed to feel more like a dialogue with a beloved tutor than a search engine, this project blends deep learning with human-like tone, creating an educational tool that’s delightful for casual users *and* impressive for engineers.

---

## ✨ Features

* 🧠 Ask any history-related question
* 🎭 Responses in-character as Professor Past
* 🗨️ Follow-up questions supported (with basic session context)
* 📱 Mobile-first responsive design
* 💬 Engaging chat UI with user and professor styling
* 📦 Chat export to Markdown
* 🚫 Rate limiting and API usage safeguards

---

## 🔧 Tech Stack

| Layer      | Technology                                        |
| ---------- | ------------------------------------------------- |
| Frontend   | HTML, CSS, Vanilla JS                            |
| Backend    | Python, Django                                    |
| AI Model   | OpenAI `gpt-4o-mini` (Chat API)                   |
| Styling    | Mobile-first, semantic HTML/CSS                   |
| Deployment | Railway (Backend)                                 |
| Extras     | `python-dotenv`, `django-ratelimit`, localStorage |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ask-professor-past.git
cd ask-professor-past
```

### 2. Create a Virtual Environment & Install Dependencies

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 3. Set Up Environment Variables

Create a `.env` file:

```env
OPENAI_API_KEY=your_openai_key_here
```

### 4. Run the Server

```bash
python manage.py migrate
python manage.py runserver
```

---

## 🛡 Safeguards

* 🔐 **API Key Management**: Stored securely via `.env`
* 📉 **Rate Limiting**: `5 reqs/min` using `django-ratelimit`
* 💸 **Budget Protection**: OpenAI account capped at \$5/month

---

## 📸 UI Highlights

* Elegant and whimsical branding
* Professor avatar paired with chat bubbles
* Historical quotes styled with a custom serif font
* Subtle animations for message reveal

---

## 🧪 Testing

| Layer    | What Was Tested                                       |
| -------- | ----------------------------------------------------- |
| Backend  | `/ask` endpoint, input validation, API error handling |
| Frontend | Message input, chat scroll, chat export               |
| Manual   | Full walkthroughs on desktop/mobile                   |

---

## 📚 Future Enhancements

* 📝 Save full chat sessions to database
* 🔊 Text-to-speech voice for Professor Past
* 🗂 Export session as PDF or scrollable archive
* 📊 Simple analytics dashboard to track most-asked historical themes
* 📜 "Random historical fact" button for curious minds

---

## 🤝 Credits

Built with Django, love of history, and too much coffee.

AI responses powered by OpenAI's [gpt-4o-mini](https://platform.openai.com/docs/models/gpt-4o).

---

## ⭐️ If You Enjoyed This Project

Leave a ⭐️ on GitHub!

> "Ah, what a fine contribution to digital scholarship this is!"
> — Professor Algernon Pastworthy III
