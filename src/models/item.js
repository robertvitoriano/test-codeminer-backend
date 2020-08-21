const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//check by name to add the quantity of points

const itemSchema = new Schema({
    quantity: {
        type:Number
    },
    name:{
        type:String
    },
    points:{
        type:Number
    }
},{
    timestamps:true
})

const Item = mongoose.model('Properties',itemSchema);

module.exports = Item;