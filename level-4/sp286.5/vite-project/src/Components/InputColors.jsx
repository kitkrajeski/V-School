import React, {useState} from "react"
import GradientDisplay from "./GradientDisplay"

export default function InputColors() {
    const [colors, setColors] = useState({
        color1: "",
        color2: "",
        angle: 0
    })

    function handleColor(event) {
        const {name, value} = event.target
        setColors({...colors,
            [name]: value
        })
        console.log(colors)
    }
    
    return (
        <div>
            <label htmlFor="color1">Color 1</label>
            <input id="color1" type="color" name="color1" value={colors.color1} onChange={handleColor}/>
            <label htmlFor="color2">Color 2</label>
            <input id="color2" type="color" name="color2" value={colors.color2} onChange={handleColor}/>
            <label htmlFor="angle">Angle</label>
            <input id="angle" type="number" name="angle" value={colors.angle} onChange={handleColor}/>
            <GradientDisplay colors={colors}/>
        </div>
    )
}