import React, { useEffect, useState } from "react";
import { POMODORO_TIME } from "./constants";

const PomodoroTimer = () => {
  const [pomodoroTime, setPomodoroTime] = useState(POMODORO_TIME); //seconds
  const [isPaused, setPaused] = useState(false); //seconds

  const [isPomodoroTimeActive, setPomodoroTimeActive] = useState(false);
  function formatTime(timeInSeconds) {
    let timeSecondsValue,
      timeMinutesValue = 0;

    timeMinutesValue = Math.floor(timeInSeconds / 60);
    timeSecondsValue = timeInSeconds % 60;

    return `${timeMinutesValue}: ${timeSecondsValue}`;
  }

  useEffect(() => {
    if (pomodoroTime == 0) {
      if (isPomodoroTimeActive) {
        setPomodoroTimeActive(false);
        clearInterval(isPomodoroTimeActive);
        setPomodoroTime(POMODORO_TIME);
      }
    }
  }, [pomodoroTime]);

  function handleOnStartClick() {
    if (isPaused) {
      setPaused(false);
    }
    let interval = setInterval(() => {
      setPomodoroTime((pomodoroTime) => pomodoroTime - 1);
    }, 1000);

    setPomodoroTimeActive(interval);
  }

  function handleOnPauseClick() {
    setPaused(true);
    clearInterval(isPomodoroTimeActive);
  }

  return (
    <div>
      <h2>{formatTime(pomodoroTime)}</h2>
      {(!isPomodoroTimeActive || isPaused) && (
        <button onClick={handleOnStartClick}>
          {isPaused ? "Resume" : "Start"}
        </button>
      )}
      {isPomodoroTimeActive && !isPaused && (
        <button onClick={handleOnPauseClick}>Pause</button>
      )}
    </div>
  );
};

export default PomodoroTimer;
