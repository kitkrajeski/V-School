import React from "react";

export default function Meme(props) {
    return (
        <div>
            <img src={props.meme.url} />
        </div>
    )
}