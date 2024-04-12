import React from "react";
import friends from "../assets/friends"
import Friend from "./Friend"

export default function Friendlist() {
    const friendo = friends.map(friend => {
        return (
            <Friend 
            name={friend.name}
            age={friend.age}
            pets={friend.pets}
            />
        )
    })
    return (
        <div>
            <h1 className="header">Hello Wassup, these are some friend and their pets</h1>
            {friendo}
        </div>
    )
}