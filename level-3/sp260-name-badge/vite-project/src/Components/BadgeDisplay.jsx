import React, {useState} from "react"

export default function BadgeDisplay({ formData }) {
    const {fName, lName, phone, birthplace, favFood, email, about} = formData
    const [badges, setBadges] = useState([])

    function addBadge(newBadge) {
        setBadges([...badges, newBadge])
    }
    return (
        <div>
            <div>
                <h1>Badge:</h1>
            </div>
            {badges.map(badge => (
                <div>
                    <h3>Name: {fName} {lName}</h3>
                    <h3>Phone: {phone}</h3>
                    <h3>Place of Birth: {birthplace}</h3>
                    <h3>Favorite Foods: {favFood}</h3>
                    <h3>Email: {email}</h3>
                    <p>{about}</p>
                </div>
            ))}
        </div>
    )
}