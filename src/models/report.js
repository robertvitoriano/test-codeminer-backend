const mongoose = require('mongoose');

const Schema = mongoose.Schema()

const ReportSchema  =  new Schema({
    description:{
        type:String,
        required:true  
    },
    info:{
        type:'Number',
        
    },
    required:true

})