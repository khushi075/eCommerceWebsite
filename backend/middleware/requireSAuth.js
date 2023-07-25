const jwt = require('jsonwebtoken')
const Seller = require('../models/sellerModel')

const requireSAuth =  async (req, res, next) => {
    //verify authentication
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "you must be logged in" })
    }

    const token = authorization.split(' ')[1]
    try {
        const {_id} = jwt.verify(token, process.env.SECRET);

        req.seller = await Seller.findOne({_id}).select('_id')
        next()
    }
    catch (err) {
        console.log(err)
        res.status(401).json({ error: "request is not authorised" })
    }
}

module.exports = requireSAuth