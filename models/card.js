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
        type:Boolean,
        required:true,
        default: false
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



module.exports = mongoose.model('Card', cardSchema)