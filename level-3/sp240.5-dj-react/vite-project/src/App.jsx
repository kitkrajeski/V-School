import { useState } from 'react'
import './App.css'
import Square from "./Components/Square"
import ColorToggleButton from "./Components/ColorToggleButton"

function App() {
  const [colors, setColor] = useState(["burlywood", "burlywood", "burlywood", "burlywood"])
  
  function applyColors() {
    return colors.map((color, index) => <Square key={index} color={color} />)
  }

  function blackOrWhite() {
    setColor(colors[0] === "white" ? ["black", "black", "black", "black"] : ["white", "white", "white", "white"])
  }

  function topPurple() {
    setColor(prevColor => ["purple", "purple", prevColor[2], prevColor[3]])
  }

  function leftBlue() {
    setColor(prevColor => [prevColor[0], prevColor[1], "blue", prevColor[3]])
  }

  function rightBlue() {
    setColor(prevColor => [prevColor[0], prevColor[1], prevColor[2], "blue"])
  }
  return (
    <>
      {applyColors()}
      <ColorToggleButton onClick={blackOrWhite}>I'm just an object, bro!</ColorToggleButton>
      <ColorToggleButton onClick={topPurple}>Me too!</ColorToggleButton>
      <ColorToggleButton onClick={leftBlue}>Wait, I'm just an object!</ColorToggleButton>
      <ColorToggleButton onClick={rightBlue}>I was first!</ColorToggleButton>
    </>
  )
}

export default App
