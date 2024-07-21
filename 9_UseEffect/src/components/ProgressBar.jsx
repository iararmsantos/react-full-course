import React, { useState, useEffect } from "react";

const ProgressBar = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remainingTime} max={timer} />;
};

export default ProgressBar;
