import React from "react";

export default function MemeForm({getRandomMeme, handleText}) {
    return (
        <div className="meme--form">
            <div className="meme--inputContainer">
                <div className="meme--inputBlock">
                    <label htmlFor="topText" >Top text</label>
                    <input type="text" id="topText" name="topText" onChange={(event)=>handleText(event.target)}/>
                </div>
                <div className="meme--inputBlock">
                    <label htmlFor="bottomText">Bottom text</label>
                    <input type="text" id="bottomText" name="bottomText" onChange={(event)=>handleText(event.target)}/>
                </div>
            </div>
            <button className="meme--button" onClick={getRandomMeme}>Get a new meme image</button>
        </div>
    )
}