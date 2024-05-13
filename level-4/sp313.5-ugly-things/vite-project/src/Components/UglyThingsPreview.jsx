import React, {useState, useContext} from "react"
import { UglyThingContext } from "../Contexts/UglyThingContext"

function UglyThingsPreview(props) {
    const {uglyThingFields} = useContext(UglyThingContext)
    return (
        <div className="posts">
            <h1>{uglyThingFields.title}</h1>
            <p>{uglyThingFields.description}</p>
            <img src={uglyThingFields.imgUrl} />
        </div>
    )
}

export default UglyThingsPreview