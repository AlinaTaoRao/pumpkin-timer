import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Btn from "./components/control-btn/Btn";
import TimeDisplay from "./components/time-display/TimeDisplay";
import useInterval from "./components/custom-hooks/useInterval";
// import { countDownTime } from "./logic/countDownTime";

import { useState, useEffect, useRef } from "react";

function App() {
  // define control buttons
  const upperBtns = ["Focus", "Short Break", "Long Break"];
  const lowerBtns = ["Start", "Stop", "Reset"];
  const originTimes = [25 * 60, 0.5 * 60, 20 * 60];

  // set state
  const [time, setTime] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [start, setStart] = useState(false);
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [curTime, setCurTime] = useState(null);

 useInterval(() => {
  if (paused || over) return;
  if(start) {
    setTime(time - 1);
    setMin(Math.floor((time-1) / 60));
    setSec((time-1) % 60);
  }
  
  }, time === 0 ? null : 1000);

  // define handler
  const handleTime = (originTime) => {
    setTime(originTime);
    setCurTime(originTime);
    setMin(Math.floor(originTime/ 60));
    setSec(originTime%60);
    setStart(false);
  };

  const handleStart = () => {
    setStart(true);
    setPaused(false);
  };

  const handleStop = () => {
    setPaused(true);
    setStart(false);
  };

  const handleReset = (curTime) => {
    setMin(Math.floor(curTime/ 60));
    setSec(curTime%60);
    setStart(false);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="upper-btn-panel columns">
        {upperBtns.map((btn, index) => (
          <Btn
            name={btn}
            key={btn}
            handler={() => handleTime(originTimes[index])}
          />
        ))}
      </div>
      <TimeDisplay min={min} sec={sec} time={time} />
      <div className="lower-btn-panel columns">
        <Btn
          name={lowerBtns[0]}
          handler={() => time && !start && handleStart()}
        />
        <Btn name={lowerBtns[1]} handler={() => handleStop()} />
        <Btn name={lowerBtns[2]} handler={() => handleReset(curTime)} />
      </div>
    </div>
  );
}

export default App;
