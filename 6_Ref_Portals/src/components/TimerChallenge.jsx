import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

// let timer;
const TimerChallenge = ({ title, targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  const timer = useRef();
  const dialog = useRef();

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  //without knowing the interval
  // const [timerExpired, setTimerExpired] = useState(false);
  // const [timerStarted, setTimerStarted] = useState(false);
  // function handleStart() {
  //   timer.current = setTimeout(() => {
  //     setTimerExpired(true);
  //     dialog.current.open();
  //   }, targetTime * 1000);
  //   setTimerStarted(true);
  // }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Timer is running..." : "Timer inactive..."}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
