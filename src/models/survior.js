const mongoose = require('mongoose');

const connection = require('./../database/connection');

const Schema = mongoose.Schema;
Schema.Types.Boolean.convertToFalse.add('');

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
    nameOfSurvivorsWhoFlagged:[{String}],
    infected:{
        type:Boolean,
        default:false

        
    }, ak: {
        type: String,
        required: false,
        
    },
    aid: {
        type: String,
        required: false
    },
    soup: {
        type: String,
        required: false
    },
    water: {
        type: String,
        required: false
    },


},
   
{
    timestamps:true,
});

const Survivor = mongoose.model('Survivor',survivorSchema);

module.exports = Survivor



