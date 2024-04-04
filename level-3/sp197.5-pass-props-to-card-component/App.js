import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

/*
Challenge: Pass props to the Card component and display that data

- img ("")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export default function App() {
            // <Hero />
    return (
        <div>
            <Navbar />
            <Card 
                img="./images/katie-zaferes.png"
                star="./images/star.png"
                rating="5.0"
                reviewCount="146"
                country="USA"
                title="Life lessons with Katie Zaferes"
                price="136"
            />
        </div>
    )
}