const mongoose = require('mongoose');
const connection = require('./../database/connection');
const Schema = mongoose.Schema;


const survivorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    lastLocation:{
        type: String,
        required:true
    },
    survivorsWhoFlaggedId:[{
        type:Schema.Types.ObjectId,
    }],
    infected:Boolean,
    default:false,
},{
    timestamps:true,
});

const Survivor = mongoose.model('Survivor',survivorSchema);

module.exports = Survivor



