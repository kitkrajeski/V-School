import React, {useState} from "react"
import Die from "./Die"

export default function Dicebox() {
    const [randomNums, setRandomNums] = useState([])
    
    function generateNumbers() {
        let newNums = []
        for (let i = 0; i < 6; i++) {
            let randomInts = Math.floor(Math.random() * (6 - 1 + 1) + 1)
            newNums.push(randomInts)
        }
        setRandomNums(newNums)
    }
    return (
        <div>
            <button onClick={generateNumbers}>Click me, bro!</button>
            <Die randomNums={randomNums} />
        </div>
    )
}