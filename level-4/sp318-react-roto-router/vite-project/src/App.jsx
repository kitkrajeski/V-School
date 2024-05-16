import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Components/About'
import Home from './Components/Home'
import Services from './Components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>       
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
