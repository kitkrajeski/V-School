import React from 'react';

const BountyFilter = ({handleFilter}) => {
    const handleChange = (event) => {
        const selectedType = event.target.value;
        handleFilter(selectedType);
    };

    return (
        <div>
            <h2>Filter by Type</h2>
                <select onChange={handleChange}>
                    <option>- Choose Type -</option>
                    <option>sith</option>
                    <option>jedi</option>
                </select>
        </div>
    )
}

export default BountyFilter;