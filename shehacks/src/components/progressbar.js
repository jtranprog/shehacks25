import React, { useState, useEffect } from 'react';
import "./progressbar.css";

const ProgressBar = () => {
    let progress = 2/4;
    const linewidth = {
        width: (progress*500),
    }

  return (
    <div className="barbody">
    <div className="progress-bar">
  <div className="label" data-count={progress*100}>{progress*100}%</div>
  <div className="line">
    <span style={linewidth}></span>
  </div></div>
</div>
  );
};

export default ProgressBar;