const responses = {
    "hello": "Hi there! How can I assist you?",
    "who are you": "I'm a chatbot designed to answer questions about Prakash Meena's profile.",
    "what is your name": "I'm Prakash Meena's chatbot. Ask me about his experience, projects, or skills!",

    // EDUCATION
    "education": "Prakash Meena is a 3rd-year B.Tech student at MNIT Jaipur, pursuing Electrical Engineering with a CGPA of 6.83.",
    "where do you study": "I study at Malaviya National Institute of Technology (MNIT) Jaipur.",
    "cgpa": "My current CGPA is 6.83.",

    // SKILLS
    "skills": "I am proficient in C++, Python, SQL, and have experience with Data Structures, Machine Learning, Pandas, and Scikit-learn.",
    "programming languages": "I am skilled in C++, Python, and SQL.",
    "tools": "I have experience using NumPy, Pandas, Matplotlib, Scikit-learn, and MySQL.",

    // PROJECTS
    "projects": "I have worked on two major projects: Spam Email Classifier and WhatsApp Chat Analyzer.",
    "tell me about your projects": "I have developed a Spam Email Classifier and a WhatsApp Chat Analyzer.",
    "spam email classifier": "I built a machine learning-based spam email classifier using Python and Scikit-learn. It preprocesses emails using NLP techniques like tokenization, stopword removal, and TF-IDF vectorization.",
    "whatsapp chat analyzer": "I created a tool to parse and analyze WhatsApp chats using Python, Pandas, and Matplotlib to extract insights like message frequency, sentiment, and user interaction patterns.",

    // ACHIEVEMENTS
    "achievements": "I secured first place in the 100m Sprint in the inter-school athletics competition.",
    "sports": "I won first place in the 100m Sprint in my school’s athletics competition.",

    // CONTACT
    "contact": "You can connect with me on LinkedIn at linkedin.com/in/prakash-meena-0683a028a/ or email me at prakashmeena1073@gmail.com.",
    "linkedin": "Here is my LinkedIn profile: linkedin.com/in/prakash-meena-0683a028a/",
    "email": "You can email me at prakashmeena1073@gmail.com.",

    // DEFAULT RESPONSE
    "default": "Sorry, I don't have an answer for that. Try asking about my education, projects, skills, or achievements."
};

function sendMessage() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let chatbox = document.getElementById("chatbox");

    let response = responses[input] || responses["default"];

    chatbox.innerHTML += `<p><b>You:</b> ${input}</p>`;
    chatbox.innerHTML += `<p><b>Bot:</b> ${response}</p>`;

    document.getElementById("userInput").value = "";
}
