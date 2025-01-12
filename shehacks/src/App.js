import React, { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import SettingsContext from "./context/SettingsContext";
import MotivationalMessages from "./components/MotivationalMessages";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
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
        <MotivationalMessages /> {/* Add MotivationalMessages here */}
        {showSettings ? <Settings /> : <Timer />}
      </div>
    </SettingsContext.Provider>
  );
}

export default App;
