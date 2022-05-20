import React from "react";

import "./styles.css";

/* display time in MM:SS */
export default function TimeDisplay({ min, sec, time }) {
  return (
    <div className="time-display">
      <div className="circle">
        <h3 className="time-count-down">
          {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}{" "}
        </h3>
        {/* <h3> time is {time}</h3> */}
      </div>
    </div>
  );
}
