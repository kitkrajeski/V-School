import React, { useState } from 'react'
import './App.css'
import InputForm from './Components/InputForm'
import { useEffect } from 'react'
import { useContext } from 'react'
import { UglyThingContext } from './Contexts/UglyThingContext'
import UglyThingsList from './Components/UglyThingsList'


function App() {

  const {getUglyThings} = useContext(UglyThingContext)

  useEffect(() => {
    // get things from API
    getUglyThings()
  }, [])

  return (
    <>
        <InputForm />
        <hr />
        <UglyThingsList />
        {/* ugly things list component */}
    </>
  )
}

export default App
