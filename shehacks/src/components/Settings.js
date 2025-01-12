import "./slider.css";
import SettingsContext from "../context/SettingsContext";
import React, { useContext, useState } from "react";
import BackButton from "./BackButton";
import ReactSlider from "react-slider";

function Settings() {
  const settingsInfo = useContext(SettingsContext); // Ensure SettingsContext is imported
  const [workValue, setWorkValue] = useState(settingsInfo.workMinutes);
  const [breakValue, setBreakValue] = useState(settingsInfo.breakMinutes);

  return (
    <div style={{ textAlign: "center" }}>
      {/* Sliders Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around", // Space between Work and Break
          alignItems: "center", // Align vertically
          marginBottom: "30px", // Add space below the container
          marginTop: "100px",
        }}
      >
        {/* Work Minutes Slider */}
        <div style={{ marginRight: "150px", flex: "1" }}>
          <label
            style={{
              color: "#432818",
              fontWeight: "bold",
              fontSize: "6vw",
              display: "block",
            }}
          >
            Work {workValue}:00
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
        <div style={{ marginLeft: "150px", flex: "1" }}>
          <label
            style={{
              color: "#432818",
              fontWeight: "bold",
              fontSize: "6vw",
              display: "block",
            }}
          >
            Break {breakValue}:00
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
      </div>

      {/* Back Button */}
      <div
        style={{
          textAlign: "center",
          justifyItems:"center",
        }}
      >
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
}

export default Settings;
