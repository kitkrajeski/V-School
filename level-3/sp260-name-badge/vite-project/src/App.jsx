import { useState } from 'react'
import './App.css'
import BadgeInput from "./Components/BadgeInput"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BadgeInput />
      </div>
        
    </>
  )
}

export default App
