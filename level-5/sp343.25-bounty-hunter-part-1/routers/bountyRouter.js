const express = require('express');
const bountyRouter = express.Router();
const uuid = require('uuid');

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

bountyRouter.get('/', (req, res) => {
    console.log('sup, bitch!');
    res.status(200).send(bounties);
})

bountyRouter.post('/', (req, res) => {
    req.body.id = uuid.v4()
    bounties.push(req.body);
    res.status(201).send(req.body)
})

module.exports = bountyRouter
