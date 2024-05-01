import React from "react";

export default function PostMeme({meme}) {
    return (
        <div className="meme--img">
                <img src={meme.randomImage} />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    )
}