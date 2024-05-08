import React, {useContext} from "react"
import {ThemeContext} from "../Contexts/ThemeContext"

function Main() {
    const {color} = useContext(ThemeContext)

    return (
        <div className={`main ${color}-theme`}>
            <h1>This is where Content goes. But that ain't Context.</h1>
        </div>
    )
}

export default Main