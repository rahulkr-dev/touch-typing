import React, { useState, useRef, useEffect } from "react";
import style from "./result.module.css";
import { useSelector,useDispatch } from "react-redux";
import { setTime,testEnd } from "../../app/typingSlice";
const Time = () => {

  const { testStarted,totalTime } = useSelector((state) => state.touchTyping);
  const ref = useRef(null);
  const dispatch = useDispatch()

  useEffect(() => {
    if (testStarted) {
      ref.current = setInterval(() => {
        // setTime((prevTime) => prevTime - 1);
        dispatch(setTime())
        // console.log(Date.now())
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

  if(totalTime==0){
    dispatch(testEnd())
  }

  return (
    <div className={style.box}>
      <div>{formatTime(totalTime)}</div>
      <div>Time</div>

    </div>
  );
};

export default Time;
