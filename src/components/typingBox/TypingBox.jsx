import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { handleTypeBoxChange } from '../../app/typingSlice';
import style from "./typingBox.module.css"
const TypingBox = () => {
  const dispatch = useDispatch();
  const {typedChar} = useSelector(state=>state.touchTyping);

  const handleChange = (e)=>{
    dispatch(handleTypeBoxChange(e.target.value))
  }
  return (
    <div className={style.container}>
      <input className={style.inputBox} value={typedChar} onChange={handleChange} type="text" />
    </div>
  )
}

export default TypingBox