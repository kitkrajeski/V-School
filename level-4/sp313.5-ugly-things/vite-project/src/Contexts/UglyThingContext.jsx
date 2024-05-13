import React, { useState, createContext } from "react"

const UglyThingContext = createContext()

function UglyThingContextProvider(props) {
    const [uglyThingFields, setUglyThingFields] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })

    const [uglyThingsList, setUglyThingsList] = useState([])
    console.log(uglyThingFields)

    function handleChange(event) {
        const { name, value } = event.target
        setUglyThingFields(prevThing => ({
            ...prevThing,
            [name]: value
        }))
        console.log("clicked")
    }

    function submitUglyThing(thing) {
        const apiUrl = 'https://api.vschool.io/kitkrajeski/thing'
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(thing)
        }

        fetch(apiUrl, requestOptions)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Failed to submit ugly thing')
                } 
                return response.json()
            })
            .then(data => {
                console.log('Ugly thing submitted;', data)
                setUglyThingsList(prevList => [...prevList, data])
                setUglyThingFields({
                    title: '',
                    description: '',
                    imgUrl: ''
                })
            })
            .catch(error => {
                console.error('Error subitting ugly thing', error)
            })
    }

    function getUglyThings(things) {
        const apiUrl = 'https://api.vschool.io/kitkrajeski/thing'

        fetch(apiUrl)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Failed to get ugly things')
                }
                return response.json()
            })
            .then(data => {
                console.log('Ugly things retrieved:', data)
                setUglyThingsList(data)
            })
        .catch(error => {
            console.error('Error getting ugly things')
        })
    }
    function removeUglyThing(id) {
        const apiUrl = `https://api.vschool.io/kitkrajeski/thing/${id}`
        const requestOptions = {
            method: 'DELETE'
        }

        fetch(apiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update ugly thing')
                }
                console.log('Ugly thing successfully removed')
                setUglyThingsList(prevList => prevList.filter(thing => thing._id !== id))
            })
            .catch(error => {
                console.error('Error deleting ugly thing', error)
            })
    } 

    function editUglyThing({uglyThing}) {
        const [editedTitle, setEditedTitle] = useState(uglyThingFields.title)
        const [editedDescription, setEditedDescription] = useState(uglyThing.description)
        const [editedImgUrl, setEditedImgUrl] = useState(uglyThing.imgUrl)
    }


    const value = {
        uglyThingFields,
        uglyThingsList,
        submitUglyThing,
        getUglyThings,
        handleChange,
        removeUglyThing,
    }

    return (
        <UglyThingContext.Provider value={value}>
            {props.children}
        </UglyThingContext.Provider>
    )
}

export { UglyThingContext, UglyThingContextProvider }