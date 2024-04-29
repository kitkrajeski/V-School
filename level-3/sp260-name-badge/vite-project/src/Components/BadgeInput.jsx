import React, {useState} from "react"
import BadgeDisplay from "./BadgeDisplay"

export default function BadgeInput() {
    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        email: "",
        birthplace: "",
        phone: "",
        favFood: "",
        about: ""

    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    function handleChange(event) {
        const { name, value } = event.target
        setFormData ({
            ...formData,
            [name]: value
        })
        console.log(formData)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setIsSubmitted(prevState => !prevState)
        console.log(isSubmitted)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                type="text"
                name="fName"
                value={formData.fName}
                placeholder="First Name"
                onChange={handleChange} 
                />
                <input
                type="text"
                name="lName"
                value={formData.lName}
                placeholder="Last Name"
                onChange={handleChange} 
                />
                <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange} 
                />
                <input
                type="text"
                name="birthplace"
                value={formData.birthplace}
                placeholder="Place of Birth"
                onChange={handleChange} 
                />
                <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Phone"
                onChange={handleChange} 
                />
                <input
                type="text"
                name="favFood"
                value={formData.favFood}
                placeholder="Favorite Food"
                onChange={handleChange} 
                />
            </div>
            <div>
                <textarea 
                rows="10"
                cols="50"
                name="about"
                value={formData.about}
                placeholder="Tell us about yourself"
                onChange={handleChange}
                />
                <button>Submit</button>
            </div>
            <div>
                {isSubmitted && <BadgeDisplay formData={formData}/>}
            </div>
        </form>
        
    )
}