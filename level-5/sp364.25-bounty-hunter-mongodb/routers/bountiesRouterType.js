const express = require('express');
const bountiesRouterType = express.Router();
const Bounty = require('../models/bounty');

bountiesRouterType.get('/:/type', (req, res, next) => {
    const {type} = req.query;
    Bounty.find({type}, (err, filteredBounties) => {
        if(err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(filteredBounties);
    })
})
