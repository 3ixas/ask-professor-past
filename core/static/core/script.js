const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const avatarUrl = document.getElementById("config").dataset.avatarUrl;

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userMsg = input.value;
    input.value = "";

    appendMessage("You", userMsg);

    loading.classList.remove("hidden");
    error.classList.add("hidden");

    try {
        const history = JSON.parse(localStorage.getItem("chatHistory") || "[]")
            .slice(-6)
            .map(({ sender, message }) => ({
                role: sender === "You" ? "user" : "assistant",
                content: message
            }));

        const res = await fetch("/ask/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                question: userMsg,
                history: history
            })
        });

        const data = await res.json();
        appendMessage("Professor Past", data.reply || "Hmm... Something went wrong.");

    } catch (err) {
        error.textContent = "Something went wrong. Please try again.";
        error.classList.remove("hidden");
    } finally {
        loading.classList.add("hidden");
    }
});

function formatQuotes(text) {
    return text.replace(/"([^"]+)"/g, '<span class="quote">"$1"</span>');
}

function appendMessage(sender, message) {
    const el = document.createElement("div");
    el.classList.add("message", sender === "You" ? "user-msg" : "prof-msg");
    
    el.innerHTML = sender === "You"
        ? `<div class="user-bubble-wrapper">
            <div class="bubble user"><strong>${sender}:</strong> ${message}</div>
        </div>`
        : `<div class="bubble professor-bubble">
            <img src="${avatarUrl}" class="avatar" />
            <div><strong>${sender}:</strong> ${formatQuotes(message)}</div>
        </div>`;

    chatBox.appendChild(el);
    chatBox.scrollTop = chatBox.scrollHeight;

    saveMessage({ sender, message });
}

function saveMessage(entry) {
    const messages = JSON.parse(localStorage.getItem("chatHistory") || "[]");
    messages.push(entry);
    localStorage.setItem("chatHistory", JSON.stringify(messages));
}

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("chatHistory") || "[]");
    messages.forEach(({ sender, message }) => appendMessage(sender, message));
}

loadMessages();

document.getElementById("clear-chat").addEventListener("click", () => {
    localStorage.removeItem("chatHistory");
    chatBox.innerHTML = "";
});

document.getElementById("export-chat").addEventListener("click", () => {
    const messages = JSON.parse(localStorage.getItem("chatHistory") || "[]");

    if (!messages.length) {
        alert("No chat history to export.");
        return;
    }

    const md = messages
        .map(({ sender, message }) => `**${sender}:** ${message}`)
        .join("\n\n");

    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `professor-past-${new Date().toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
});