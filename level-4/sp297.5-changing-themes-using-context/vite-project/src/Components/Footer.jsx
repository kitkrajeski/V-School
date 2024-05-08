import React, {useContext} from "react"
import {ThemeContext} from "../Contexts/ThemeContext"

function Footer(props) {
    const {color, toggleTheme} = useContext(ThemeContext)
    return (
        <div>
            <footer className={`footer ${color}-theme`}>
                <button onClick={toggleTheme}>Click to see an object</button>
            </footer>
        </div>
    )
}

export default Footer