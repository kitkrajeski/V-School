const express = require('express');
const thingsRouter = express.Router();
const uuid = require('uuid');


thingsRouter.use('/', (req, res, next) => {
    const thing = {
        name: 'hello',
        id: uuid.v4()
    };
    console.log('sup, bitch')
    req.body = {...thing,
        lastName: 'world'
    }
    next()
})

thingsRouter.use('/', (req, res, next) => {
    res.status(200).send(req.body)
    console.log('sup again, bitch')
})

module.exports = thingsRouter;