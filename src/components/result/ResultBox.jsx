import React from 'react'
import style from "./result.module.css"
const ResultBox = ({id,value}) => {
  return (
    <div className={style.box}>
      <div>{value}</div>
      <div>{id}</div>
    </div>
  )
}

export default ResultBox