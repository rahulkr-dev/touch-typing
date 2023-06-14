import React from 'react'
import ResultBox from './ResultBox'
import Time from "./Time"
import style from "./result.module.css"

const Result = () => {
  return (
    <div className={style.container}>
      <ResultBox id={"WPM"} value={`40`} />
      <ResultBox id="Error" value="10" />
      <ResultBox id="Accuracy" value="100%" />
     <Time></Time>
    </div>
  )
}

export default Result