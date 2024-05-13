import { useContext } from "react";
import { UglyThingContext } from "../Contexts/UglyThingContext"
import EditUglyThing from "./EditUglyThing"
function UglyThingsList() {

    const { uglyThingsList, removeUglyThing } = useContext(UglyThingContext);

    return (
        <ul>
            {uglyThingsList.map(thing => (
                <div>
                    <li>{thing.title}</li>
                    <li>{thing.description}</li>
                    <li>
                        <img src={thing.imgUrl} />
                    </li>
                    <button onClick={() => removeUglyThing(thing._id)}>Remove</button>
                    <button>Edit</button>
                </div>
            ))}
            <EditUglyThing />
        </ul>
    )
}

export default UglyThingsList