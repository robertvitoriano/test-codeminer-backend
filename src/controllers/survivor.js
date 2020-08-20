const SurvivorModel = require('./../models/survior');

module.exports = {

     registerSurvivor(req, res){
        
         const survivor = new SurvivorModel(req.body);
        try {
            console.log(req.body);
            survivor.save()
            res.status(201).send({message:'survivor registered'})
            
        } catch (error) {
            console.log(error)
            
        }
       },

    tradeItems(req, res){
    },

    reportInfection(req, res){
        


    },

    getAllSurvivors(req, res){

    },
    getSurvivorById(req, res){
        res.send({message:'all survivors'})


    },

    updateSurvivorLocation(req,res){


    }


}




