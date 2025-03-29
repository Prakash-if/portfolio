async function sendMessage() {
    let inputField = document.getElementById("userInput");
    let input = inputField.value.trim();
    let chatbox = document.getElementById("chatbox");

    if (!input) return;  // Prevent empty messages

    // Display user message
    chatbox.innerHTML += `<p><b>You:</b> ${input}</p>`;
    inputField.value = "";  // Clear input field

    try {
        let response = await fetch("http://127.0.0.1:5000/chat", {  // Ensure Flask server is running on 5000
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input })
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        let data = await response.json();
        let botResponse = data.response || "Sorry, I couldn't understand that.";

        // Display bot response
        chatbox.innerHTML += `<p><b>Bot:</b> ${botResponse}</p>`;

    } catch (error) {
        console.error("Error:", error);
        chatbox.innerHTML += `<p><b>Bot:</b> Error connecting to the server. Please check if Flask is running.</p>`;
    }

    // Auto-scroll chatbox to show latest messages
    chatbox.scrollTop = chatbox.scrollHeight;}
