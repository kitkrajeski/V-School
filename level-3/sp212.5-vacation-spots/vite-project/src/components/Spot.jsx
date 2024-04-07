import React from "react";

export default function Spot(props) {
    return (
        <div className="spot">
            <img className="spot--img" src={props.img} />
            <div className="spot--textContainer">
                <h1>{props.place}</h1>
                <h3>Price: {props.price} Buckaroos</h3>
                <h2>{props.dollars}</h2>
                <p>When to go: {props.timeToGo}</p>
            </div>
        </div>
    )
}