import React, {useState} from 'react'
import BountyForm from './BountyForm'

const Bounties = (props) => {
    const [editToggle, setEditToggle] = useState(false);
    return (
        <div>
            { !editToggle ?
            <>
            <h1>Name: {props.firstName} {props.lastName}</h1>
            <h3>Category: {props.type}</h3>
            <p>Bounty: {props.bountyAmount}</p>
            <p>{props.living ? `${props.firstName} is ALIVE` : `${props.firstName} is DEAD`}</p>
            <button onClick={() => props.deleteBounty(props.id)}>DELETE</button>
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>EDIT</button>
            </>
            :
            <>
            <BountyForm 
                firstName={props.firstName}
                lastName={props.lastName}
                jediOrSith={props.jediOrSith}
                bountyAmount={props.bountyAmount}
                living={props.living}
                btnText='Submit Edit'
                submit={props.editBounty}
                id={props.id}
                />
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    )
}

export default Bounties