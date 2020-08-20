const SurvivorModel = require('./../models/survior');
const survivorRouter = require('../routes/survivor');

module.exports = {

     registerSurvivor(req,res){
        
         const survivor = new SurvivorModel({name:req.body.name,
                                             age:req.body.age,                  
                                             lastLocation:req.body.lastLocation,           
                                             gender:req.body.gender

                                 });
        try {
            console.log(req.body);
            survivor.save()
            res.status(204).send({message:'it works'})
            
        } catch (error) {
            console.log(error)
            
        }
       },

    tradeItems(req,res){
    },

    reportInfection(req,res){


    },

    getAllSurvivors(req,res){

    },
    getSurvivorById(req,res){
        res.send({message:'all survivors'})


    },

    updateSurvivorLocation(req,res){


    }


}




