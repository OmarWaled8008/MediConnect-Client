import React, { useState, useRef } from "react";
import "./chatbox.css";
const intents = {
  intents: [
    {
      tag: "greeting",
      patterns: ["Hi", "Hey", "How are you?", "Is anyone there?", "Hello", "Good day", "What’s up?", "Howdy"],
      responses: [
        "Hey :-)",
        "Hello, thanks for visiting!",
        "Hi there, what can I do for you?",
        "Hi there, how can I help?",
        "Greetings! How can I assist you today?",
      ],
    },
    {
      tag: "what_is_mediconnect",
      patterns: [
        "What is MediConnect?",
        "Can you tell me about MediConnect?",
        "What does MediConnect do?",
        "Explain MediConnect",
        "What services does MediConnect offer?",
        "Tell me about MediConnect"
      ],
      responses: ["MediConnect is a hospital management system designed to streamline healthcare operations and manage patient records and appointments."],
    },
    {
      tag: "how_to_book_appointment",
      patterns: [
        "How can I book an appointment?",
        "Can I book an appointment?",
        "Appointment booking process",
        "How to schedule an appointment?",
        "What are the steps to book an appointment?",
        "Can you guide me to book an appointment?"
      ],
      responses: ["You can easily book an appointment by signing into your account and navigating to the 'Booking' section. From there, select your preferred doctor and available time slot to confirm your appointment."],
    },
    {
      tag: "data_security",
      patterns: [
        "Is my personal data safe?",
        "How is my data protected?",
        "Is my information secure?",
        "Is my personal information safe with MediConnect?",
        "What security measures are in place for my data?",
        "How do you protect my data?"
      ],
      responses: ["Yes, your data is secure. You can view our privacy policy for more details."],
    },
    {
      tag: "access_health_records",
      patterns: [
        "How can I access my health records?",
        "Can I see my health records?",
        "Where are my health records?",
        "How do I view my medical records?",
        "Where can I find my health information?",
        "Accessing my health records"
      ],
      responses: ["After logging into your account, go to the 'Profile' section where you can view, download, or share your health records securely."],
    },
    {
      tag: "cancel_reschedule_appointment",
      patterns: [
        "Can I cancel an appointment?",
        "How to cancel an appointment?",
        "Can I reschedule an appointment?",
        "How to reschedule an appointment?",
        "What if I need to change my appointment?",
        "Can I modify my appointment?"
      ],
      responses: ["Yes, you can cancel or reschedule an appointment by visiting the 'Booking' section and selecting the respective appointment. Follow the instructions provided to complete the process."],
    },
    {
      tag: "forgot_password",
      patterns: [
        "What if I forget my password?",
        "I forgot my password",
        "How to reset my password?",
        "Can I reset my password?",
        "I can't remember my password",
        "Help with forgotten password"
      ],
      responses: ["Click on the 'Forgot Password' link on the login page and follow the instructions to reset your password. You will receive an email with a link to set up a new password."],
    },
    {
      tag: "contact_support",
      patterns: [
        "How do I contact customer support?",
        "Can I contact support?",
        "I need help, how to reach support?",
        "Customer support contact",
        "What’s the best way to reach support?",
        "How can I get assistance?"
      ],
      responses: ["If you have any questions or need assistance, please contact our support team via email at Mediconnect@gmail.com."],
    },
    {
      tag: "services_offered",
      patterns: [
        "What services do you offer?",
        "Services offered by MediConnect",
        "What can I do with MediConnect?",
        "What features does MediConnect have?",
        "List the services available in MediConnect",
        "What can I expect from MediConnect?"
      ],
      responses: ["MediConnect offers a variety of services including appointment booking, health records management, telemedicine, and patient reviews."],
    },
    {
      tag: "telemedicine",
      patterns: [
        "Do you offer telemedicine?",
        "Can I consult a doctor online?",
        "How to use telemedicine service?",
        "Online doctor consultation",
        "What is your telemedicine process?",
        "How can I get a telemedicine appointment?"
      ],
      responses: ["Yes, we offer telemedicine services. You can consult with a doctor online by booking an appointment through our platform."],
    },
    {
      tag: "payment_options",
      patterns: [
        "What payment options do you have?",
        "How can I pay for the services?",
        "Payment methods",
        "Accepted payment options",
        "What are my payment choices?",
        "Can I use cash for payment?"
      ],
      responses: ["We accept various payment options including credit/debit cards, online banking, and mobile wallets. You can select your preferred payment method during the booking process."],
    },
    {
      tag: "insurance_coverage",
      patterns: [
        "Do you accept insurance?",
        "Is my insurance accepted?",
        "Insurance coverage",
        "Which insurance plans are accepted?",
        "Can I use my health insurance?",
        "What insurance providers do you work with?"
      ],
      responses: ["Yes, we accept a wide range of insurance plans. Please check our insurance compatibility section for more details."],
    },
    {
      tag: "location_services",
      patterns: [
        "How can I find a nearby hospital?",
        "Do you have a locator for hospitals?",
        "Where's the nearest hospital?",
        "Find a hospital near me",
        "How to use the hospital locator?",
        "Can you help me find hospitals nearby?"
      ],
      responses: ["You can use our hospital locator feature by entering your location or allowing the app to access your location. It will show you the nearest hospitals."],
    },
    {
      tag: "mental_health_resources",
      patterns: [
        "What mental health resources do you have?",
        "Can you recommend mental health services?",
        "Do you provide mental wellness support?",
        "How can I get help for mental health?",
        "Tell me about mental health services offered",
        "Resources for mental wellness"
      ],
      responses: ["We offer various mental health resources, including online counseling, therapy sessions, and wellness articles. You can access these services through our platform."],
    },
    {
      tag: "feedback",
      patterns: [
        "How can I give feedback?",
        "Where can I leave a review?",
        "Can I provide feedback on my experience?",
        "I want to share my thoughts about MediConnect",
        "How do I submit feedback?"
      ],
      responses: ["We appreciate your feedback! You can share your thoughts via email at Mediconnect@gmail.com or leave a review on our website."],
    },
    {
      tag: "doctor_availability",
      patterns: [
        "How can I check a doctor's availability?",
        "Can I see when a doctor is free?",
        "Do you have a schedule for doctors?",
        "When can I book an appointment with a specific doctor?",
        "How do I find out if a doctor is available?"
      ],
      responses: ["You can check a doctor's availability by visiting the 'Booking' section and selecting the desired doctor. Their available time slots will be displayed."],
    },
    {
      tag: "service_hours",
      patterns: [
        "What are your service hours?",
        "When is MediConnect available?",
        "What time can I contact customer support?",
        "Do you have business hours?",
        "When can I use MediConnect services?"
      ],
      responses: ["MediConnect services are available 24/7. However, customer support is available from 9 AM to 5 PM on weekdays."],
    },
    {
      tag: "thanks",
      patterns: ["Thanks", "Thank you", "That's helpful", "Thanks a lot!", "I appreciate it!", "Many thanks"],
      responses: ["Happy to help!", "Any time!", "My pleasure!", "You're welcome!", "Glad I could assist!"],
    },
    {
      tag: "goodbye",
      patterns: [
        "Bye",
        "See you later",
        "Goodbye",
        "Take care",
        "Catch you later",
        "Have a great day"
      ],
      responses: [
        "See you later, thanks for visiting!",
        "Have a nice day!",
        "Bye! Come back again soon.",
        "Take care, and stay healthy!",
        "Goodbye! We're here if you need us."
      ],
    }
  ],
};

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState(null); // New state to track expanded questions
  const messagesEndRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);
    setInput(""); // Clear input field

    setTimeout(() => {
      const botResponse = simulateBotResponse(input);
      const botMessage = { text: botResponse, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsLoading(false);
      scrollToBottom(); // Scroll to the latest message
    }, 1000);
  };

  const simulateBotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();
    for (const intent of intents.intents) {
      if (intent.patterns.some((pattern) => lowerCaseInput.includes(pattern.toLowerCase()))) {
        return getRandomResponse(intent.responses);
      }
    }
    return "Sorry, I didn't understand that.";
  };

  const getRandomResponse = (responses) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const toggleChatVisibility = () => {
    setIsChatVisible((prev) => !prev);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSampleQuestionClick = (question, index) => {
    setInput(question);
    sendMessage();
    setExpandedQuestions(expandedQuestions === index ? null : index); // Toggle related questions
  };

  const closeChat = () => {
    setIsChatVisible(false);
  };

  // Close chat when clicking outside the chatbox
  const handleClickOutside = (e) => {
    if (isChatVisible && e.target.closest('.chat-window') === null) {
      closeChat();
    }
  };

  // Event listener for clicks outside the chatbox
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isChatVisible]);

  return (
    <div className="chatbox">
      <button className="ourbtn fixed right-5 bottom-5 p-3" onClick={toggleChatVisibility}>
        <i className="fa-brands fa-rocketchat"></i>
      </button>
      {isChatVisible && (
        <div className="chat-window">
          <div className="chat-header">Chat with MediConnect</div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "user" ? "message user-message" : "message bot-message"}>
                {msg.text}
              </div>
            ))}
            {isLoading && <div className="message bot-message">...</div>}
            <div ref={messagesEndRef} /> {/* Empty div to act as the end of messages */}
          </div>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
          />
          <button className="send" onClick={sendMessage}>Send</button>

          {/* Sample Questions Section */}
          <div className="sample-questions">
            <h4>Sample Questions</h4>
            {intents.intents.map((intent, index) => (
              <div key={intent.tag}>
                <button
                  className="sample-question-button"
                  onClick={() => handleSampleQuestionClick(intent.patterns[0], index)}
                >
                  {intent.patterns[0]}
                </button>
                {expandedQuestions === index && (
                  <div className="related-questions">
                    {intent.patterns.slice(1).map((pattern, idx) => (
                      <button
                        key={idx}
                        className="related-question-button"
                        onClick={() => handleSampleQuestionClick(pattern, index)}
                      >
                        {pattern}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
