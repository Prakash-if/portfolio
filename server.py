from flask import Flask, request, jsonify
from flask_cors import CORS  # Required for frontend to access backend
from groq import Groq

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Set up Groq API client  
client = Groq(api_key="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")

# Structured Resume Data
resume_prompt = """
You are a chatbot that provides information about Prakash Meena's resume. Here is his resume data:

Name: Prakash Meena  
Contact:  
- Phone: +91 8529381073  
- Email: prakashmeena1073@gmail.com  
- LinkedIn: https://www.linkedin.com/in/prakash-meena-0683a028a/  

Summary:  
Prakash is a 3rd-year B.Tech student in Electrical Engineering with an interest in Data Science and Machine Learning.  

Education:  
- B.Tech in Electrical Engineering, Malaviya National Institute of Technology Jaipur (Nov 2022 - Present, CGPA: 6.83)  
- Intermediate, S Vivekanand Govt. Model School, Dungarpur (2022, 90.2%)  
- Matriculation, Mahaveer Public School, Udaipur (2020, 88%)  

Skills:  
- Programming Languages: C++, Python, SQL  
- Tools: NumPy, Pandas, Matplotlib, scikit-learn, MySQL  
- Concepts: Data Structures and Algorithms (DSA), Machine Learning  

Projects:  
1. **Spam Email Classifier**: Developed a machine learning-based spam classifier using Python, Scikit-learn, NLP, Logistic Regression, Naïve Bayes, SVM, and Flask.  
2. **WhatsApp Chat Analyzer**: Developed a tool to parse and analyze WhatsApp chats using Python, Pandas, and Matplotlib.  

Languages: English, Hindi  
Achievements: Secured first place in 100m Sprint in an inter-school athletics competition.  

When users ask questions about Prakash’s resume, respond with the relevant information from the resume data. Keep responses concise and professional.
"""

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message")

    if not user_input:
        return jsonify({"error": "No message provided"}), 400

    try:
        response = client.chat.completions.create(
            model="llama3-8b-8192",
            messages=[
                {"role": "system", "content": resume_prompt},  # Use resume details as context
                {"role": "user", "content": user_input}
            ]
        )  # <-- This line was broken, now fixed

        bot_reply = response.choices[0].message.content
        return jsonify({"response": bot_reply})

    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Return API error messages

if __name__ == "__main__":
    app.run(debug=True, port=5000)  # Backend should run on port 5000
