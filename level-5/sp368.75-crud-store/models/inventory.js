const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema ({
    item: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
    }
})

module.exports =mongoose.model('Item', itemSchema)