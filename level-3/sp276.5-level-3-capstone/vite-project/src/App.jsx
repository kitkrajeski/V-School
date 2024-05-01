import { useState } from 'react'
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

  function handleText(input) {
    const {name, value} = input
    setCurrentMeme(prevMeme => ({
      ...prevMeme,
      [name]: value,
    }))
    console.log(currentMeme)
  }
  
  const [allMemeImages, setAllMemeImages] = useState(data.data.memes)
  const getRandomMeme = () => {
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
      <MemeForm handleText={handleText} getRandomMeme={getRandomMeme}/>
      {currentMeme && <PostMeme meme={currentMeme} />}
    </>
  )
}

export default App;
