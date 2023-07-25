const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const sellerSchema = new Schema({
    storename: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

//static signup method
sellerSchema.statics.signup = async  function ( email, password, storename)  {
    //validation
    if (!email || !password || !storename) {
        throw Error('All fields are required')
    }
    if (!validator.isEmail(email)) {
        throw Error('Invalid email')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password must be at least 8 characters long, contain a number and a special character and both uppercase and lowercase letters')
    }

    const exists = await this.findOne({email})
    const exists2 = await this.findOne({storename})
    if(exists) throw new Error('Email already in use')
    if(exists2) throw new Error('Store already exists')

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const seller = await this.create({email,password:hash,storename})

    return seller

}

//static login method
sellerSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('All fields are required')
    }
    const seller = await this.findOne({email})
    if(!seller) {
        throw new Error('Email not registered')
    }
    const match = await bcrypt.compare(password, seller.password)
    if(!match) {
        throw new Error('Incorrect password')
    }
    return seller

}

module.exports = mongoose.model('Seller', sellerSchema)