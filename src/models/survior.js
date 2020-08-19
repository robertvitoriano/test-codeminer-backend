const mongoose = require('mongoose');
const connection = require('./../database/connection');
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
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

    }
})
