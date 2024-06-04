const express = require('express');
const thingsRouter = express.Router();
const uuid = require('uuid')

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        id: uuid.v4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        id: uuid.v4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        id: uuid.v4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        id: uuid.v4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        id: uuid.v4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        id: uuid.v4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        id: uuid.v4()
    }
]

thingsRouter.get('/', (req, res) => {
    console.log('sup, bitch!');
    res.status(200).send(inventoryItems);
})

thingsRouter.get('/search', (req, res) => {
    console.log(req)
    const {type} = req.query;
    if (type) {
        const filteredTypes = inventoryItems.filter(item => item.type === type);
        res.status(200).send(filteredTypes);
    } else {
        res.status(200).send(inventoryItems);
    }
})

thingsRouter.delete('/:id', (req, res) => {
    const {id} = req.params;
    const itemIndex = inventoryItems.findIndex(item => item.id === id);
    inventoryItems.splice(itemIndex, 1);
})

thingsRouter.put('/:id', (req, res) => {
    const {id} = req.params;
    const itemIndex = inventoryItems.findIndex(item => item.id = id);
    const updatedItem = Object.assign(inventoryItems[itemIndex], req.body)
    res.send(updatedItem)
})

module.exports = thingsRouter;