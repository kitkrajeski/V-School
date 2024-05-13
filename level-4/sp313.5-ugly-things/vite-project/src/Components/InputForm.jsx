import React, {useContext, useState} from "react"
import {UglyThingContext} from "../Contexts/UglyThingContext"
import UglyThingsPreview from "./UglyThingsPreview"

function InputForm() {
    const {uglyThingFields, handleChange, submitUglyThing} = useContext(UglyThingContext)
    return (
    <>
        <div className="input-fields">
            <input 
            type="text"
            placeholder="Title"
            name="title"
            value={uglyThingFields.title}
            onChange={(event) => handleChange(event)}
            />
            <input 
            type="text"
            placeholder="Img URL"
            name="imgUrl"
            value={uglyThingFields.imgUrl}
            onChange={(event) => handleChange(event)}
            />
            <input 
            type="text"
            placeholder="Description"
            name="description"
            value={uglyThingFields.description}
            onChange={(event) => handleChange(event)}
            />
        </div>
        <div className="input-button">
            {/* invoke submitUglyThing() */}
            <button onClick={() => submitUglyThing(uglyThingFields)}>Post me, bitch!</button>
        </div>
        <UglyThingsPreview />
    </>
    )
}

export default InputForm