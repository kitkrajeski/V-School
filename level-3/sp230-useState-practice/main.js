const [color, setColor] = useState("pink")

setColor("yellow")

const [color, setColor] = useState("pink")

setColor(prevColor => prevColor === "pink" ? "blue" : "pink")

const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])

setPeople(prevPeople => {[...prevPeople,
    {firstName: "Jane",
    lastName: "Smith"
    }]
})

const [colors, setColors] = setState(["pink", "blue"])

setColors(prevColors => [...prevColors, "green"])

const [countObject, setCountObject] = setState({
	count: 0
})

setCountObject(prevState=> ({ count: prevState.count + 1}))


const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith"
})

setPerson(prevPerson => {
    ({
        ...prevPerson,
        age: 30
    })
})