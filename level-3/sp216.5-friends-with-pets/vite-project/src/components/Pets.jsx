import React from "react";

export default function Pets(props) {
    return (
        <div className="pets">
            <h3>&bull; {props.pets.name} is a {props.pets.breed} &bull;</h3>
        </div>
    )
}