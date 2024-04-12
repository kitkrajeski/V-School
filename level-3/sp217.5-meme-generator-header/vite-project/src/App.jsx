import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import MemeForm from "./components/MemeForm"
import Meme from "./components/GetNewMeme"
import data from "./memesData"


function MemeList(props) {
  const getRandomIndex = () => Math.floor(Math.random() * props.memes.length);
  const getRandomMeme = () => props.memes[getRandomIndex()]
  return (
    <div>
      {Array.from(Array(props.count)).map(() => <Meme meme={getRandomMeme()} />)}
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <MemeForm />
      <MemeList memes={data.data.memes} count={100} />
    </>
  )
}

export default App;
