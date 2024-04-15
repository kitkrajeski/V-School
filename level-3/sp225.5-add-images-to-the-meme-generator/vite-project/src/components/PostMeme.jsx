import React from "react";

export default function PostMeme(props) {
    return (
        <div>
            <img src={props.meme.url} />
        </div>
    )
}