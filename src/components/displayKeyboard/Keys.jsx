import React from "react";
import { useSelector } from "react-redux";
const Keys = ({ value }) => {
    const {nextChar} = useSelector(state=>state.touchTyping);
    console.log(nextChar)
    const flag = nextChar==value
  return <button className={`button ${flag?"active":"not-active"}`}>{value}</button>;
};

export default Keys;
