import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import MemeForm from "./components/MemeForm"
import PostMeme from "./components/PostMeme"
import MemeList from "./components/MemeList"
import data from "./memesData"


function App() {
  const [currentMeme, setCurrentMeme] = useState(null)
  const getRandomMeme = () => {
    const randomIndex = Math.floor(Math.random() * data.data.memes.length)
    setCurrentMeme(data.data.memes[randomIndex])
  }
  return (
    <>
      <Header />
      <MemeForm getRandomMeme={getRandomMeme}/>
      {/* <MemeList memes={data.data.memes} /> */}
      {currentMeme && <PostMeme meme={currentMeme} />}
    </>
  )
}

export default App;
