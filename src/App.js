import "./styles.css";

import { useCallback, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  let updateInterval;
  const startTimer = () => {
    if (!isStarted && !updateInterval) {
      updateInterval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
      setIsStarted(true);
    } else {
      console.log("here");
      clearInterval(updateInterval);
      setPaused(true);
      setIsStarted(false);
    }
  };

  const stopTimer = () => {
    clearInterval(setCount(0));

    if (!!document.querySelector("#counter")) {
      document.querySelector("#counter").remove();
    }
    document.querySelector(".stop-button").setAttribute("disabled", "true");
    document.querySelector(".start-button").removeAttribute("disabled");
    document.querySelector(".pause-button").remove();
  };

  const currentCount = count;

  return (
    <div className="counter-container">
      <button className="start-button" onClick={startTimer}>
        {isStarted ? "Pause" : "Start"}
      </button>
      <button className="stop-button" onClick={stopTimer}>
        stop
      </button>
      <p id="counter">{currentCount}</p>
    </div>
  );
}
