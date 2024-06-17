const express = require('express');
const inventoryRouter = express.Router();
const Item = require('../models/inventory');

inventoryRouter.get('/', (req, res, next) => {
    // Item.find({}, (err, allInventory) => {
    //     if(err) {
    //         res.status(500);
    //         return next(err);
    //     }
    //     return res.status(200).send(allInventory);
    // });
    Item.find({})
    .then(allInventory => {
        res.status(200).send(allInventory);
    })
    .catch(err => {
        res.status(500);
        next(err);
    });
});

inventoryRouter.get('/:id', (req, res, next) => {
    Item.findById(req.params.id)
        .then(item => {
            if(!item) {
                res.status(404).send({error: 'item not found'});
            } else {
                res.status(200).send(item);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({error: 'an error occured while fetching item'});
        });
});

// inventoryRouter.post('/', (req, res, next) => {
//     const newItem = new Item(req.body);
//     newItem.save((err, savedItem) => {
//         if(err) {
//             res.status(500);
//             return next(err);
//         }
//         return res.status(201).send(savedItem);
//     });
// });

inventoryRouter.post('/', (req, res, next) => {
    console.log('Received POST request with body:', req.body);
    const newItem = new Item(req.body);
    newItem.save()
        .then(savedItem => {
            console.log('Item saved successfully:', savedItem);
            res.status(201).send(savedItem);
        })
        .catch(err => {
            console.error('Error saving item:', err);
            res.status(500).send({ error: 'An error occurred while saving the item' });
        });
});

inventoryRouter.put('/:id', (req, res, next) => {
    Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(updatedItem => {
            if(!updatedItem) {
                res.status(404).send({error: 'item not found'});
            } else {
                res.status(200).send(updatedItem)
            }
        })
        .catch(err=> {
            console.error('error updating item:', err);
            res.status(500).send({error: 'an error occurred while updating the item'});
        });
});

inventoryRouter.delete('/:id', (req, res, next) => {
    Item.findByIdAndDelete(req.params.id)
        .then(deletedItem => {
            if(!deletedItem) {
                res.status(404).send({error: 'item not found'});
            } else {
                res.status(200).send({message: 'item deleted successfully'});
            }
        })
        .catch(err => {
            console.error('error deleting item:', err);
            res.status(500).send({error: 'an error occurred while deleting the item'});
        })
})

module.exports = inventoryRouter;