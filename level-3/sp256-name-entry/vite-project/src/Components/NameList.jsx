import React, {useState} from "react"

export default function NameList(props) {
    return (
        <div>
            <ul>
                {props.names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    )
}