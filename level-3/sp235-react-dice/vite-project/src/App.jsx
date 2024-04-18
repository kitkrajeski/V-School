import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dicebox from "./Components/Dicebox"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dicebox />
    </>
  )
}

export default App
