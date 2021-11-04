const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    front: {
        type: String,
        required:true
    },
    back: {
        type: String
    },
    tags: [],
    isCorrect: {
        type:Boolean
    },
    isActive: {
        type:Boolean,
        default: false
    },
    timesSeen: {
        type:Number,
        default: 0
    }
})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    signUpDate: {
        type:Date,
        required:true,
        default: Date.now
    },
    cards:[cardSchema]
})



module.exports = mongoose.model('User', userSchema)