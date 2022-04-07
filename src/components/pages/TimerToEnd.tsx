import React from "react";
import { Link } from "react-router-dom";
import TimerToEnd from "../common/timerToEnd/TimerToEnd";

function TimerToEndPage() {
  return (
    <div>
      <TimerToEnd />
      <Link to="/" className="linkToTask__link--home">
        Cofnij
      </Link>
    </div>
  );
}

export default TimerToEndPage;
