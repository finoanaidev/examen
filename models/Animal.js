const mongoose = require('mongoose')
const Schema = mongoose.Schema

const animalSchema = new Schema({
    nom:{
        type:String
    },
    type:{
        type: String
    },
    couleur:{
        type: String
    }, 
    image: {
        type:String
    }
}, {timestamps: true})

const Animal = mongoose.model('Animal', animalSchema)
module.exports = Animal