import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import SettingsContext from "./context/SettingsContext";
import MotivationalMessages from "./components/MotivationalMessages";
import BlindBox from "./components/blind-box";
import ProgressBar from "./components/ProgressBar";
import ChatBox from "./components/Chatbox";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [showBlindBox, setShowBlindBox] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowBlindBox(true);

      // Hide the BlindBox after 5 seconds
      setTimeout(() => setShowBlindBox(false), 5000);
    }, Math.random() * (10000 - 5000) + 5000); // Random interval between 5-10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        <div className="App">
          <MotivationalMessages />
          {showSettings ? <Settings /> : <Timer />}
          <div className="progressbar">
            <ProgressBar />
          </div>
        </div>
      </SettingsContext.Provider>
      <div className="blindbox-section">
        <BlindBox />
      </div>
      <div className="App">
        <img src={"./images/logo.png"} className="App-logo" alt="logo" />
      </div>
      <div className="heart">
        <img src={"./images/pink-heart.png"} className="heart" alt="heart" />
      </div>
      <div className="chatbox-container">
        <ChatBox />
      </div>
    </main>
  );
}

export default App;
