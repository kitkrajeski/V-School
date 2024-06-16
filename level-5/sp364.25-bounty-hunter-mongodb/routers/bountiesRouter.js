const express = require('express');
const bountiesRouter = express.Router();
const uuid = require('uuid');
const Bounty = require('../models/bounty')

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

bountiesRouter.get('/', (req, res, next) => {
    const {type} = req.query;
    Bounty.find({type}, (err, filteredBounties) => {
        if(err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(filteredBounties);
    })
})

bountiesRouter.post('/', (req, res, next) => {
    const newBounty = new Bounty(req.body);
    newBounty.save((err, savedBounty) => {
        if(err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(savedBounty);
    })
})

bountiesRouter.delete('/:bountyId', (req, res, next) => {
    Bounty.findOneAndDelete({id: req.params.bountyId}, (err, deletedItem) => {
        if(err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(`Deleted item ${deletedItem.firstName} from the database`);
    })
})

bountiesRouter.put('/:bountyId', (req, res, next) => {
    Bounty.findOneAndUpdate(
        {id: req.params.bountyId},
        req.body,
        {new: true},
        (err, updatedBounty) => {
            if(err) {
                res.status(500);
                return next(err);
            }
            return res.status(201).send(updatedBounty);
        }
    )
})

module.exports = bountiesRouter;