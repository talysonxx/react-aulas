import React, {useState} from 'react'
import './App.css'

export default function App() {
  setInterval(getTime, 1000)
  
  const [time, setTime] = useState('Loading timer...')

  function getTime(){
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const now = `${hour}:${minute}:${second}`
    setTime(now)
    document.title = 'Timer: ' + now
  }

  return (
    <div className='timer-container'>
      <span className='timer'>{time}</span>
    </div>
  )

}
