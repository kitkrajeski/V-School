import React from "react";

export default function Blogpost(props) {
    return (
        <div className="posts">
            <div className="post">
                <h1 className="post--title">{props.title}</h1>
                <h2 className="post--subTitle">{props.subTitle}</h2>
                <p className="post--byline">Posted by <span className="post--author">{props.author}</span> on <span>{props.date}</span></p>
            </div>
        </div>
    )
}