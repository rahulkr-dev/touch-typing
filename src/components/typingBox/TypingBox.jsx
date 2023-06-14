import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { handleTypeBoxChange } from '../../app/typingSlice';
const TypingBox = () => {
  const dispatch = useDispatch();
  const {typedChar} = useSelector(state=>state.touchTyping);

  const handleChange = (e)=>{
    dispatch(handleTypeBoxChange(e.target.value))
  }
  return (
    <div>
      <input value={typedChar} onChange={handleChange} type="text" />
    </div>
  )
}

export default TypingBox