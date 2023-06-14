import React from 'react'
import { useDispatch } from 'react-redux'
import style from "./result.module.css"
import { resetTest } from '../../app/typingSlice'
const ResetTest = () => {
    const dispatch = useDispatch()
    const handleResetTest = ()=>{
        dispatch(resetTest())
    }
  return (
    <div onClick={handleResetTest} className={style.resetTest}>Reset Test</div>
  )
}

export default ResetTest