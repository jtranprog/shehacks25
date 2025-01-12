import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "../App.css";

const MotivationalMessages = () => {
  const messages = [
    "Keep pushing forward!",
    "You're doing amazing!",
    "Believe in yourself!",
    "Every step counts!",
    "Success is just around the corner!",
    "Don't give up now!",
    "Your hard work will pay off!",
    "Stay positive and keep coding!",
    "Great things take time!",
    "You’ve got this!",
  ];

  const [currentMessage, setCurrentMessage] = useState(
    "Stay positive and keep coding!"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setCurrentMessage(messages[randomIndex]);
    }, 60000); // Change this to 60000ms (1 minute)

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div className="motivational-message">
      <p>{currentMessage}</p>
    </div>
  );
};

export default MotivationalMessages;
