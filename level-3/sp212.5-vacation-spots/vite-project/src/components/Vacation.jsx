import React from "react";
import Spot from "./Spot";
import vacationSpots from "../assets/vacationSpots"

export default function Vacation() {
    const dollarBills = (price) => {
        if (price < 500) return "$"
        else if (price > 500 && price < 1000) return "$$"
        else return "$$$"
    }
    const vacation = vacationSpots.map(spot => {
        return (
            <Spot
            img={spot.img}
            place={spot.place}
            price={spot.price}
            dollars={dollarBills(spot.price)}
            timeToGo={spot.timeToGo}
            />
        )
    })

    return (
        <>
            {vacation}
        </>
    )
}