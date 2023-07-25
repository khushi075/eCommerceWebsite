const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    store: {
        type: String,
        required: true
    },
    descr: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    seller_id: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)