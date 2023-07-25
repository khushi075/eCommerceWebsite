const express = require('express');
const { create } = require('../models/productModel');
const { createProduct, getProduct, getProducts, deleteProduct, updateProduct } = require('../controllers/productController');

const requireSAuth = require('../middleware/requireSAuth')

const router = express.Router();

//requireAuth for all Product routes
router.use(requireSAuth)

//get all Products
router.get('/',getProducts)

//get a single Product
router.get('/:id',getProduct)

//create a Product
router.post('/', createProduct)

//delete a Product
router.delete('/:id',deleteProduct)

//update a Product
router.patch('/:id',updateProduct)

module.exports = router