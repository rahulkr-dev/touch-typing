import React,{useState,useRef,useEffect} from "react";
import style from "./result.module.css";
const Time = () => {
  const [time, setTime] = useState(300); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const ref = useRef(null)

  useEffect(() => {


    if (isRunning) {
      ref.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(ref.current);
    };
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStartTimer = () => {
    setIsRunning(true);
  };

  const handleResetTimer = () => {
    setIsRunning(false);
    setTime(300);
  };
  return (
    <div className={style.box}>
      <div>{formatTime(time)}</div>
      <div>Time</div>
      <div onClick={()=>handleStartTimer()} className={style.startTest}>Start Test</div>
    </div>
  );
};

export default Time;
