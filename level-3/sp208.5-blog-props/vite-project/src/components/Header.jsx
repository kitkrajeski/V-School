import React from "react";
import Background from "../assets/home-bg.jpg";
import Navbar from "./Navbar"

export default function Header() {
    return (
        <div className="header">
            <img src={Background} className="backgroundImg"/>
            <Navbar />
            <h1 className="bigHeader">Clean Blog</h1>
            <h3 className="description">A Blog Theme by Start Bootstrap</h3>
        </div>
    )
}