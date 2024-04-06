import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Bloglist from "./components/Bloglist"

function App() {
  return (
    <>
      <Header />
      <Bloglist />      
    </>
  )
}

export default App
