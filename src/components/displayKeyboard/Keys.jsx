import React from "react";
import { useSelector } from "react-redux";
import style from "./displayKeyboard.module.css"
const Keys = ({ value }) => {
  const { nextChar } = useSelector((state) => state.touchTyping);
  console.log(nextChar);
  const flag = nextChar == value;
  return (
    <span className={`${style.button} ${flag ? "active" : "not-active"} ${value==" "?"spaceBar":""}`}>
      {value}
    </span>
  );
};

export default Keys;
