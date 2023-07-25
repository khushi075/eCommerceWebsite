const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    product_id: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    seller_id: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)