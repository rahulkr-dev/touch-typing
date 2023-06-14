import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const KeysToType = () => {
    const {displayChar} = useSelector(state=>state.touchTyping)

  return (
    <div>{displayChar}</div>
  )
}

export default KeysToType