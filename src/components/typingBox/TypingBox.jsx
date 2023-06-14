import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { handleTypeBoxChange } from '../../app/typingSlice';
import style from "./typingBox.module.css"
const TypingBox = () => {
  const dispatch = useDispatch();
  const {typedChar} = useSelector(state=>state.touchTyping);

  const handleChange = (e)=>{
    // console.log(e.nativeEvent.data==" ")
    dispatch(handleTypeBoxChange({value:e.target.value,backspace:e.nativeEvent.data}))
  }
  return (
    <div className={style.container}>
      <textarea placeholder='Re-Type the words' className={style.inputBox} value={typedChar} onChange={handleChange} type="text" />
    </div>
  )
}

export default TypingBox