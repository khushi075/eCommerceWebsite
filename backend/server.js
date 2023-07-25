require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//creates express app
const app = express()
const productsRoute = require('./routes/products')
const productAddRoute = require('./routes/uploadProd')
const userRoutes = require('./routes/user')
const sellerRoutes = require('./routes/seller')

//middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/products', productsRoute)
app.use('/api/users', userRoutes)
app.use('/api/sellers', sellerRoutes)
app.use('/api/product', productAddRoute)


//connect to mongodb
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        //listening for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening for requests on port', process.env.PORT, 'yayyy ppl')
        })
    })
    .catch((err) => { console.log(err) })


