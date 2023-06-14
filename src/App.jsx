import React from 'react'
import KeysToType from './components/keysToType/KeysToType'
import TypingBox from './components/typingBox/TypingBox';
import DisplayKeyboard from './components/displayKeyboard/DisplayKeyboard';
import "./App.css"
import Result from './components/result/Result';

const App = () => {
  return (
    <div className='app'>
      <Result />
      <KeysToType />
      <TypingBox />
      <DisplayKeyboard />
    </div>
  )
}

export default App