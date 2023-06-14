import React, { useState, useRef, useEffect } from "react";
import style from "./result.module.css";
import { useSelector,useDispatch } from "react-redux";
import { setTime } from "../../app/typingSlice";
const Time = () => {
  // const [time, setTime] = useState(300); // 5 minutes in seconds
  // const [isRunning, setIsRunning] = useState(false);
  const { testStarted,totalTime } = useSelector((state) => state.touchTyping);
  const ref = useRef(null);
  const dispatch = useDispatch()

  useEffect(() => {
    if (testStarted) {
      ref.current = setInterval(() => {
        // setTime((prevTime) => prevTime - 1);
        dispatch(setTime())
      }, 1000);
    }

    return () => {
      clearInterval(ref.current);
    };
  }, [testStarted]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // const handleStartTimer = () => {
  //   setIsRunning(true);
  // };

  // const handleStartTest = () => {
  //   setTestStart(true);
  //   handleStartTimer();
  // };

  // const handleResetTimer = () => {
  //   setIsRunning(false);
  //   setTime(300);
  // };

  // const handleEndTest = () => {
  //   setTestStart(false);
  //   handleResetTimer();
  // };
  return (
    <div className={style.box}>
      <div>{formatTime(totalTime)}</div>
      <div>Time</div>
      {/* <div
        onClick={handleStartTest}
        className={`${style.startTest} ${
          testStart ? "displayNone" : "displayBlock"
        }`}
      >
        Start Test
      </div>
      <div
        onClick={handleEndTest}
        className={`${style.startTest} ${
          testStart ? "displayBlock" : "displayNone"
        }`}
      >
        End Test
      </div> */}
    </div>
  );
};

export default Time;
