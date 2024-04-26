import React, {useState} from "react"
import NameList from "./NameList"

export default function NameEntry() {
    const [formData, setFormData] = useState({
        name: "",
    })
    const [names, setNames] = useState([])
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        })
        console.log(name)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setNames(prevNames => {
            return [ 
                ...prevNames, formData.name
            ]
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter a name, bitch"
                onChange={handleChange}
                />
                <button>Submit, bitch</button>
            </form>
            <h1>{formData.name}</h1>
            <NameList names={names} />
        </div>    
    )
}