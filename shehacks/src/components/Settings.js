
import "./slider.css";
import SettingsContext from "../context/SettingsContext";
import React, { useContext, useState } from "react";
import BackButton from "./BackButton";
import ReactSlider from "react-slider";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  const [workValue, setWorkValue] = useState(settingsInfo.workMinutes);
  const [breakValue, setBreakValue] = useState(settingsInfo.breakMinutes);

  return (
    <div style={{ textAlign: "center", padding: "20px", marginTop: "60px" }}>
      {/* Work Minutes Slider */}
      <div style={{ marginBottom: "30px" }}>
        <label style={{ color: "#432818", fontWeight: "bold" }}>
          Work: {workValue}:00
        </label>
        <ReactSlider
          className={"slider"}
          thumbClassName={"thumb"}
          trackClassName={"track"}
          value={workValue}
          onChange={(newValue) => {
            setWorkValue(newValue);
            settingsInfo.setWorkMinutes(newValue);
          }}
          min={10}
          max={120}
        />
      </div>

      {/* Break Minutes Slider */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ color: "#432818", fontWeight: "bold" }}>
          Break: {breakValue}:00
        </label>
        <ReactSlider
          className={"slider green"}
          thumbClassName={"thumb"}
          trackClassName={"track"}
          value={breakValue}
          onChange={(newValue) => {
            setBreakValue(newValue);
            settingsInfo.setBreakMinutes(newValue);
          }}
          min={5}
          max={20}
        />
      </div>

      {/* Back Button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
}

export default Settings;
