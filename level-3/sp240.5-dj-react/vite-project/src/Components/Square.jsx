import React from "react"

export default function Square({color}) {
    return (
        <div>
            <div className="square" style={{backgroundColor: color}}></div>
        </div>
    )
}