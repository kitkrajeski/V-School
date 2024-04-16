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
  const [currentMeme, setCurrentMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemeImages, setAllMemeImages] = useState(data.data.memes)
  const getRandomMeme = () => {
    // const memesArray = allMemeImages.data.memes
    const randomIndex = Math.floor(Math.random() * data.data.memes.length)
    const url = allMemeImages[randomIndex].url
    setCurrentMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
    }))
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
