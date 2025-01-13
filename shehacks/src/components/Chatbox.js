import React from "react";
import "./Chatbox.css"; // Make sure this matches your provided CSS
const Chatbox = () => {
  return (
    <div className="chatbot">
      {/* Header */}
      <div className="header">Chat with Us</div>
      {/* Messages Container */}
      <div className="messages">
        {/* Static bot message */}
        <div className="message-container">
          <div className="bot-message">Hi! How can I help you today?</div>
        </div>
        {/* Static user message */}
        <div className="message-container">
          <div className="user-message">What tools do you recommend for frontend?</div>
        </div>
        {/* Another static bot message */}
        <div className="message-container">
          <div className="bot-message">
            For frontend development, I suggest Tailwind CSS, Figma, and Coolors.
          </div>
        </div>
      </div>
      {/* Input Box */}
      <div className="input">
        <form>
          <input type="text" placeholder="Type your message..." />
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#4A4A4A"
                d="M2 21l21-9L2 3v7l15 2-15 2v7z"
              ></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};
export default Chatbox;