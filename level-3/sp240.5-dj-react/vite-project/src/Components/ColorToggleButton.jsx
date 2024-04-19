import React from "react"

const ColorToggleButton = ({onClick, children}) => (
    <button onClick={onClick}>{children}</button>
)

export default ColorToggleButton