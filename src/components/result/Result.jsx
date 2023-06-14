import React from 'react'
import ResultBox from './ResultBox'
import Time from "./Time"
import style from "./result.module.css"
import EndTest from './EndTest'
import ResetTest from './ResetTest'

const Result = () => {
  return (
    <div className={style.container}>
      <EndTest />
      <ResetTest />
      <ResultBox id={"WPM"} value={`40`} />
      <ResultBox id="Error" value="10" />
      <ResultBox id="Accuracy" value="100%" />
     <Time></Time>
    </div>
  )
}

export default Result