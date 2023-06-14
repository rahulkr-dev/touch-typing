import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Keys from "./Keys";
import { initialNextChar } from "../../app/typingSlice";
const DisplayKeyboard = () => {
  const { displayKeys } = useSelector((state) => state.touchTyping);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialNextChar());
  }, []);
  return (
    <div>
      {displayKeys.map((obj) => (
        <Keys key={obj.value} value={obj.value} />
      ))}
    </div>
  );
};

export default DisplayKeyboard;
