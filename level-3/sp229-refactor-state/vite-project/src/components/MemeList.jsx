import React from "react"
import PostMeme from "./PostMeme"

export default function MemeList(props) {
    const getRandomIndex = () => Math.floor(Math.random() * props.memes.length);
    const getRandomMeme = () => props.memes[getRandomIndex()]
    return (
      <div>
        {/* {Array.from(Array(props.count)).map(() => <Meme meme={getRandomMeme()} />)} */}
        <PostMeme meme={getRandomMeme()} />
      </div>
    )
  }