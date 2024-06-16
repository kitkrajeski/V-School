import React, {useState} from 'react'

const BountyForm = (props) => {
    const initInputs = {
        firstName: props.firstName || '', 
        lastName: props.lastName || '', 
        sithOrJedi: props.sithOrJedi || '', 
        bountyAmount: props.bountyAmount || '', 
        living: true
        }
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submit(inputs, props.id);
        setInputs(initInputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            name='firstName'
            value={inputs.firstName}
            onChange={handleChange}
            placeholder='First Name'/>
            <input
            type='text'
            name='lastName'
            value={inputs.lastName}
            onChange={handleChange}
            placeholder='Last Name'/>
            <select
            name='sithOrJedi'
            value={inputs.sithOrJedi}
            onChange={handleChange}
            >
                <option>Select...</option>
                <option value='Sith'>Sith</option>
                <option value='Jedi'>Jedi</option>
            </select>
            <input
            type='text'
            name='bountyAmount'
            value={inputs.bountyAmount}
            onChange={handleChange}
            placeholder='Bounty Amount'/>
            <select
            name='living'
            value={inputs.living}
            onChange={handleChange}
            >
                <option>Select...</option>
                <option value={true}>Living</option>
                <option value={false}>Dead</option>
            </select>
            <button>{props.btnText}</button>
        </form>
    )
}

export default BountyForm