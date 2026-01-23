const GEMINI_API_KEY = "YOUR_API_KEY_HERE";

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('chatbot-toggle-btn');
    const chatbotWindow = document.getElementById('chatbot-window');
    const closeBtn = document.querySelector('.close-chatbot');
    const chatInput = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send-btn');
    const messagesContainer = document.getElementById('chatbot-messages');

    // Toggle Chat Window
    toggleBtn.addEventListener('click', () => {
        chatbotWindow.classList.toggle('visible');
        if (chatbotWindow.classList.contains('visible')) {
            chatInput.focus();
        }
    });

    closeBtn.addEventListener('click', () => {
        chatbotWindow.classList.remove('visible');
    });

    // Send Message Logic
    async function handleSend() {
        const text = chatInput.value.trim();
        if (!text) return;

        // Add user message to UI
        addMessage(text, 'user');
        chatInput.value = '';

        // Show loading state (optional)
        const loadingMsg = addMessage('...', 'bot');

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: text }]
                    }]
                })
            });

            const data = await response.json();
            
            // Remove loading message
            loadingMsg.remove();

            if (data.candidates && data.candidates[0].content.parts[0].text) {
                const botReply = data.candidates[0].content.parts[0].text;
                addMessage(botReply, 'bot');
            } else {
                addMessage("I'm sorry, I couldn't process that. Please try again.", 'bot');
            }
        } catch (error) {
            console.error('Gemini API Error:', error);
            loadingMsg.remove();
            addMessage("Error connecting to the AI. Check your API key or connection.", 'bot');
        }
    }

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}-message`;
        msgDiv.textContent = text;
        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return msgDiv;
    }

    sendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
});
