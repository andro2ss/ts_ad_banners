import React, { useEffect, useState } from "react";
import "./TimerToEnd.scss";
import { timeToEnd } from "./helpers/EndTime";
import { setEndDate } from "./helpers/SetEndDate";

function TimerToEnd() {
  const [timer, setTimer] = useState<string>();
  const [tempEndDate, setTempEndDate] = useState<Date>();

  useEffect(() => {
    if (!tempEndDate) {
      setTempEndDate(setEndDate());
    } else {
      const interval = setInterval(() => {
        const currentTime: Date = new Date();
        setTimer(timeToEnd(currentTime, tempEndDate));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, tempEndDate]);

  return (
    <div className="timerToEnd__container">
      <span className="timerToEnd__text">{timer ? timer : ""}</span>
    </div>
  );
}

export default TimerToEnd;
