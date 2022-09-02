import React, { useState, useEffect, useRef } from 'react'
import './App.css'

const App = () => {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const timer = useRef(null)

  
  useEffect(() => {
    timer.current = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000)
    
    if (seconds === 60) {
      setMinutes(minutes + 1)
      setSeconds(0);
    }
    if (minutes === 60) {
      setHours(hours + 1)
      setMinutes(0);
      setSeconds(0);
    }
    
    return () => clearInterval(timer.current);
  },[seconds, minutes, hours]);

  // const start = () =>  {

    
  // }

  const restart = () => {

    setHours(0);
    setMinutes(0);
    setSeconds(0);

  }

  const stop = () => {

    clearInterval(timer.current);
  }



  return (
    <div className='main-section'>
      <div className='clock-holder'>
        <div className='stopwatch'>
        <span className='stopwatch span'>
        {hours < 10 ? "0" + hours : hours}:{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
        </span><br />
        {/* <button onClick={start} className='stopwatch-btn'>start</button> */}
        <button onClick={restart} className='stopwatch-btn'>Restart</button>
        <button onClick={stop} className='stopwatch-btn'>Stop</button>
        </div>
      </div>
    </div>
  )
}

export default App