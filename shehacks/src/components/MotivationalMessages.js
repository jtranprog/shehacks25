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
    "Great things take time!",
    "You’ve got this!",
    "Take a 5-minute walk to refresh your mind.",
    "Try the Rubber Duck Debugging technique.",
    "Write down your current problem on paper.",
    "Refactor a small piece of code for practice.",
    "Learn a new keyboard shortcut for your IDE.",
    "Do a quick code review of your recent work.",
    "Write a test for a function you recently created.",
    "Explain your current project to an imaginary person.",
    "Try solving a quick coding challenge on LeetCode.",
    "Meditate for 5 minutes to clear your mind.",
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
