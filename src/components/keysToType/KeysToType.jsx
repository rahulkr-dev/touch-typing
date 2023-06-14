import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import style from "./keys.module.css"
const KeysToType = () => {
    const {displayChar} = useSelector(state=>state.touchTyping)

  return (
    <div className={style.container}>{displayChar}</div>
  )
}

export default KeysToType