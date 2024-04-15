import React from "react";

export default function MemeForm({getRandomMeme}) {
    return (
        <div className="meme--form">
            <div className="meme--inputContainer">
                <div className="meme--inputBlock">
                    <label htmlFor="topText" >Top text</label>
                    <input type="text" id="topText"/>
                </div>
                <div className="meme--inputBlock">
                    <label htmlFor="bottomText" >Bottom text</label>
                    <input type="text" id="bottomText"/>
                </div>
            </div>
            <button className="meme--button" onClick={getRandomMeme}>Get a new meme image</button>
        </div>
    )
}