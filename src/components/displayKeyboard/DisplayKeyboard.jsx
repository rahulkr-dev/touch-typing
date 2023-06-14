import React from 'react'
import { useSelector } from 'react-redux'
import Keys from './Keys';
const DisplayKeyboard = () => {
    const {displayKeys} = useSelector(state=>state.touchTyping);

  return (
    <div>
        {displayKeys.map((obj)=>(
            <Keys key={obj.value} value={obj.value} />
        ))}
    </div>
  )
}

export default DisplayKeyboard