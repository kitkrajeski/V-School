import {createContext, useContext, useState} from 'react'

const HouseContext = createContext()

const useHouseApi = () => {
    const [house, setHouse] = useState(null);

    const getRandomHouse = () => {
        const randomInt = Math.floor(Math.random() * (444 - 1 + 1)) + 1//....
        // GET
        fetch(`https://anapioficeandfire.com/api/houses/${randomInt}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then(data => {
                setHouse(data)
            })
            .catch(error => console.error('Error fetching data', error))
        // update state
    }

    return {
        house,
        getRandomHouse
    }
}

function HouseContextProvider(props) {
    const houseApi = useHouseApi()
    return (
        <HouseContext.Provider value={houseApi}>
            {props.children}
        </HouseContext.Provider>
    )
}

// const useHouseContext = useContext(HouseContext)

export {HouseContext, HouseContextProvider}