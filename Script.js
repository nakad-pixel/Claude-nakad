const chatLog = document.getElementById("chatLog");

function appendMessage(sender, text) {
  const message = document.createElement("div");
  message.className = "message";
  message.innerHTML = `<span class="${sender}">${sender === "user" ? "You" : "Claude"}:</span> ${text}`;
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Static response generator for demo purposes
function getDummyResponse(prompt) {
  const responses = [
    `Hmm... interesting! What makes you say "${prompt}"?`,
    `That's a great thought! I'd love to dive deeper into it.`,
    `Let me think... if Claude were here live, maybe he'd say something wise 😄`,
    `Sounds smart—though I'm just a static bot today!`,
    `"${prompt}" is definitely worth exploring! What do you think happens next?`
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const userText = input.value.trim();
  if (!userText) return;

  appendMessage("user", userText);
  input.value = "";

  const response = getDummyResponse(userText);
  setTimeout(() => {
    appendMessage("ai", response);
  }, 500);
}
