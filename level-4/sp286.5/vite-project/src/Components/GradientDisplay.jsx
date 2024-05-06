import React, {useEffect, useState} from "react"

export default function GradientDisplay({colors}) {
    const gradientStyle = {
        background: `linear-gradient(${colors.angle}deg, ${colors.color1}, ${colors.color2})`,
        width: "100%",
        height: "200px"
    }

    const [shouldDisplay, setShouldDisplay] = useState(false) 

    useEffect(() => {
        if (colors.color1 && colors.color2){
            setShouldDisplay(true)
        }
    }
    , [colors.color1, colors.color2])
    return (
        <div style={gradientStyle}>
            <br/>
            {shouldDisplay && (<p>
            background: linear-gradient({colors.angle}deg, {colors.color1}, {colors.color2});
            <br/>
            -moz-background: linear-gradient({colors.angle}deg, {colors.color1}, {colors.color2}); 
            <br/>
            -webkit: linear-gradient({colors.angle}deg, {colors.color1}, {colors.color2})
            </p>)}
        </div> 
    )
}