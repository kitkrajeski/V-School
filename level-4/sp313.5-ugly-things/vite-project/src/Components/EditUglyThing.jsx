import React, {useContext} from "react";
import { UglyThingContext } from "../Contexts/UglyThingContext";

function EditUglyThing(props) {
    const {editedTitle} = useContext(UglyThingContext)

    return (
        <div>
            <p>{editedTitle}</p>
        </div>
    )
}

export default EditUglyThing