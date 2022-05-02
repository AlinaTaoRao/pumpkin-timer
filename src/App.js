import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Btn from "./components/control-btn/Btn";
import TimeDisplay from "./components/time-display/TimeDisplay";
// import useValueRef from "./components/custom-hooks/useValueRef";
// import useInterval from "./components/custom-hooks/useInterval";
// import { countDownTime } from "./logic/countDownTime";

import { useState, useEffect, useRef } from "react";

/* logic function */
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

function App() {
  // define control buttons
  const upperBtns = ["Focus", "Short Break", "Long Break"];
  const lowerBtns = ["Start", "Stop", "Reset"];
  const originTimes = [25 * 60, 5 * 60, 20 * 60];

  // set state
  const [time, setTime] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isStartBtnWorking, setIsStartBtnWorking] = useState(false);

  useInterval(() => {
    setTime(time - 1);
    setMin(Math.floor(time / 60));
    setSec(time % 60);
  }, 1000);

  // define handler
  const handleTime = (originTime) => {
    setTime(originTime);
  };

  const handleStart = () => {
    setIsStartBtnWorking(true);

    // const countDownTime = () => {
    //   console.log("start count down.");
    //   // setTime((time) => time - 1);
    //   // setMin(Math.floor(time % 60));
    //   // setSec(time % 60);
    // };
    // const intervalA = setInterval(countDownTime, 1000);
    // console.log("scheduled interval A", intervalA);

    // const clearA = () => {
    //   console.log("timeout!");
    //   clearInterval(intervalA);

    //   setIsStartBtnWorking(false);
    //   console.log(
    //     "success reset setIsStartBtnWorking to false",
    //     isStartBtnWorking
    //   );
    // };

    // setTimeout(clearA, 1500000);
    // console.log("scheduled timeout");
  };

  const handleStop = () => {};

  const handleReset = () => {};

  // useEffect(() => {
  // setTime(time-1);
  // setMin(Math.floor(time % 60));
  // setSec(time % 60);
  // }, [time]);

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
          handler={() => !isStartBtnWorking && handleStart()}
        />
        <Btn name={lowerBtns[1]} handler={() => handleStop()} />
        <Btn name={lowerBtns[2]} handler={() => handleReset()} />
      </div>
    </div>
  );
}

export default App;
