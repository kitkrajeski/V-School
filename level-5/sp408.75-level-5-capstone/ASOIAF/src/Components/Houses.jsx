import React, { useEffect, useContext } from 'react'
import { HouseContext } from '../Contexts/HouseContext'

function Houses() {
    // const {house, getRandomHouse} = useHouseContext()
    const {house, getRandomHouse} = useContext(HouseContext)
    useEffect(() => {
        getRandomHouse()
    },[])
    const handleGetRandomHouse = () => {
        getRandomHouse()
    }

    // if(!house) return (
    //     <div>Loading House...</div>
    // )
    return (
        <div className='houses--background'>
            <button onClick={handleGetRandomHouse}>Get New</button>
            {house && <h1>{house.name}</h1>}
            {house && <h1>{house.coatOfArms}</h1>}
        </div>
    )
}

export default Houses