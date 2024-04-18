import React from "react"

export default function Die({randomNums}) {
    return randomNums.map(num => {
        return <p>{num}</p>
    })
}