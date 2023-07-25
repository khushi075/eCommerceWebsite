const Seller = require('../models/sellerModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//login user
const loginSeller = async (req, res) => {
    const {email, password} = req.body

    try {
        const seller = await Seller.login( email, password)

        //create token
        const token = createToken(seller._id)

        res.status(200).json({email,token,storename:seller.storename})
    } catch (error) {   
        res.status(400).json({error:error.message})
    }
}

//signup user
const signupSeller = async (req, res) => {
    const { email, password,storename} = req.body

    try {
        const seller = await Seller.signup( email, password,storename)

        //create token
        const token = createToken(seller._id)

        res.status(200).json({email,token,storename})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}



module.exports = {
    loginSeller,
    signupSeller
}