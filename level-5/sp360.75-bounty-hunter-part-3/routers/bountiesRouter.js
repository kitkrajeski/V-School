const express = require('express');
const bountiesRouter = express.Router();
const uuid = require('uuid');
const Movie = require('../models/bounty')

const bounties = [
    {
        id: uuid.v4(),
        firstName: 'Darth',
        lastName: 'Vader',
        living: true,
        bountyAmount: 1000000,
        type: 'Sith'
    },
    {
        id: uuid.v4(),
        firstName: 'Luke',
        lastName: 'Skywalker',
        living: true,
        bountyAmount: 500000,
        type: 'Jedi'
    },
    {
        id: uuid.v4(),
        firstName: 'Leia',
        lastName: 'Organa',
        living: false,
        bountyAmount: 300000,
        type: 'Jedi'
    },
    {
        id: uuid.v4(),
        firstName: 'Obi-Wan',
        lastName: 'Kenobi',
        living: false,
        bountyAmount: 200000,
        type: 'Jedi'
    },
    {
        id: uuid.v4(),
        firstName: 'Emperor',
        lastName: 'Palpatine',
        living: false,
        bountyAmount: 1500000,
        type: 'Sith'
    }
];

bountiesRouter.get('/', (req, res) => {
    res.send(bounties)
})

bountiesRouter.post('/', (req, res) => {
    const newBounty = req.body;
    newBounty.id = uuid.v4();
    bounties.push(newBounty);
    res.send(newBounty);
})

bountiesRouter.delete('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(bounty => bounty.id === bountyId);
    bounties.splice(bountyIndex, 1);
    res.send('bounty be gone, bitch');
})

bountiesRouter.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId;
    const updatedObject = req.body;
    const bountyIndex = bounties.findIndex(bounty => bounty.id === bountyId);
    const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject);
    res.send(updatedBounty);
})

module.exports = bountiesRouter;