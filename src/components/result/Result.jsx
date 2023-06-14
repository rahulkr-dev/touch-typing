import React from "react";
import ResultBox from "./ResultBox";
import Time from "./Time";
import style from "./result.module.css";
import EndTest from "./EndTest";
import ResetTest from "./ResetTest";
import { useSelector } from "react-redux";

const Result = () => {
  const { totalTyped, correctTyped, totalTime,averageWordLength } = useSelector(
    (state) => state.touchTyping
  );

  // const averageWordLength = 1; // Assuming an average word length of 5 characters
  const totalWord = correctTyped / averageWordLength;
  let wpm;
  if (totalTime==300) {
    wpm = 0;
  } else wpm = (totalWord / ((300 - totalTime) / 60)).toFixed(0); // Divide by 60 to convert seconds to minutes

  return (
    <div className={style.container}>
      <EndTest />
      <ResetTest />
      <ResultBox id={"WPM"} value={wpm} />
      <ResultBox id="Error" value={totalTyped - correctTyped.toFixed(0)} />
      <ResultBox
        id="Accuracy"
        value={`${((correctTyped / totalTyped) * 100 || 100).toFixed(0)}%`}
      />
      <Time></Time>
    </div>
  );
};

export default Result;
