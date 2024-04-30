import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [randomColor, setRandomColor] = useState({})

  React.useEffect(() => {
    console.log("Run!")
    fetch("https://random-color.onrender.com/colors/random")
      .then(res => res.json())
      .then(data => setRandomColor(data))
  }, [])
  console.log(randomColor)

  function changeColor() {
    fetch("https://random-color.onrender.com/colors/random")
      .then(res => res.json())
      .then(data => setRandomColor(data))
  }

  return (
    <>
      <div>
        <button style={{backgroundColor: randomColor.name}} onClick={changeColor}>Push Me</button>
      </div>
    </>
  )
}

export default App
