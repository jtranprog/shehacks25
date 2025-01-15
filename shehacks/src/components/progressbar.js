import React, { useState, useEffect } from "react";
import "./progressbar.css";

const ProgressBar = () => {
  // let progress = 2 / 4;
  // const linewidth = {
  //   width: progress * 500,
  const progress = 0.3;
  const barWidth = 1200;

  return (
    <div className="progress-bar">
      <div className="line">
        <span style={{ width: `${progress * 100}%` }}></span>
      </div>
      <div className="label">{`${Math.round(progress * 100)}%`}</div>
    </div>
  );
};

export default ProgressBar;
