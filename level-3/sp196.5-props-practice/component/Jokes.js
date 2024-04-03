import React from "react";

export default function Jokes(props) {
    return (
        <div>
            <h3>{props.setup}</h3>
            <h3>{props.punchline}</h3>
        </div>
    )
}