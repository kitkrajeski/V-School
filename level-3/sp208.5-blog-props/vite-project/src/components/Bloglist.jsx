import React from "react";
import Blogpost from "./Blogpost";
import data from "../assets/data";

export default function Bloglist() {
    const posts = data.map(post => {
        return (
            <Blogpost
            title={post.title}
            subTitle={post.subTitle}
            author={post.author}
            date={post.date}
            />
        )
    })
    
    return (
        <div>
            {posts}
        </div>
    )
}