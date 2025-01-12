import React, { useState, useEffect } from 'react';
import './progressbar.css';

const ProgressBar = () => {
  const [totalTime, setTotalTime] = useState(0); // Initialize totalTime state

  useEffect(() => {
    // Set interval to increment totalTime every second (1000ms)
    const intervalId = setInterval(() => {
      setTotalTime(prevTime => prevTime + 1);  // Increment totalTime by 1
    }, 1000);  // Increment every 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);  // Empty dependency array means the effect runs once when the component mounts

  let progress = totalTime / 10;  // Example: calculate progress based on total_time
  console.log(progress);

  const linewidth = {
    width: `${progress * 100}%`,  // Update the width dynamically based on progress
  };

  return (
    <div className="barbody">
      <div className="progress-bar">
        <div className="label" data-count={Math.min(progress * 100, 100)}>
          {Math.min(progress * 100, 100)}%
        </div>
        <div className="line">
          <span style={linewidth}></span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
