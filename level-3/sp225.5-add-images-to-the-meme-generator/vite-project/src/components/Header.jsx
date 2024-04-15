import React from "react";
import troll from "../assets/Troll_Face.png"

export default function Header() {
    return (
        <div className="header">
            <div className="header--logoContainer">
                <img src={troll} className="header--troll"/>
                <h3>Meme Generator</h3>
            </div>
            <div className="header--projectId">
                <p>React Course - Project 3</p>
            </div>
        </div>
    )
}