const Product = require('../models/productModel')
const mongoose = require('mongoose')

//get all Products
const getProducts = async (req, res) => {
    const seller_id = req.seller._id
    try {
        const Products = await Product.find({seller_id}).sort({ createdAt: -1 })
        res.status(200).json(Products)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//get a single Product
const getProduct = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Product not found'})
    }

    const Product = await Product.findById(id)

    if(!Product){
       return res.status(404).json({error: 'Product not found'})
    }

    res.status(200).json(Product)
}

//create a Product
const createProduct = async (req, res) => {
    const { title, completed, descr } = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!completed) {
        emptyFields.push('completed')
    }
    if (!descr) {
        emptyFields.push('descr')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: `Please fill in the following fields: ${emptyFields.join(', ')}` })
    }

    //add doc to db
    try {
        const seller_id = req.seller._id
        const Product = await Product.create({ title, completed, descr, seller_id })
        res.status(200).json(Product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete a Product
const deleteProduct = async (req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Product not found'})
    }

    const Product = await Product.findOneAndDelete({_id:id})

    if(!Product){
         return res.status(404).json({error: 'Product not found'})
    }

    res.status(200).json(Product)
}

//update a Product
const updateProduct = async (req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Product not found'})
    }

    const Product = await Product.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!Product){
         return res.status(404).json({error: 'Product not found'})
    }

    res.status(200).json(Product)
}


module.exports = {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}