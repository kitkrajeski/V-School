import React from "react"
import Pets from "./Pets"

export default function Friend(props) {
    return (
        <div className="friend">
            <h1 className="friend--title">{props.name} is {props.age} years old.</h1>
            {props.pets.map(pet => 
            <Pets pets={pet}/>                
            )}
        </div>
    )
}