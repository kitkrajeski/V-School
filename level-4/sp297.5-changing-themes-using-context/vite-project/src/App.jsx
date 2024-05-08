import React, { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import {ThemeContextProvider} from "./Contexts/ThemeContext"

function App(props) {

  return (
    <>
      <ThemeContextProvider>
        <Navbar />
        <Main />
        <Footer />
      </ThemeContextProvider>
    </>
  )
}

export default App
