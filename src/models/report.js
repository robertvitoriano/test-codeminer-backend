const mongoose = require('mongoose');

const Schema = mongoose.Schema()

const ReportSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true  
    },
    info:{
        type:Number,
        
    },
  

})


const Report = mongoose.model('Report',ReportSchema)



module.exports = Report