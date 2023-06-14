import React from "react";
import { useDispatch } from "react-redux";
import style from "./result.module.css";
import { testEnd } from "../../app/typingSlice";
const EndTest = () => {
  const dispatch = useDispatch();

  const handleEndTest = () => {
    dispatch(testEnd());
  };
  return (
    <div onClick={handleEndTest} className={style.endTest}>
      EndTest
    </div>
  );
};

export default EndTest;
