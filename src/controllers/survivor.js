const SurvivorModel = require('./../models/survior');

module.exports = {

    async registerSurvivor(req,res){
        const survivor = new SurvivorModel(req.body);
        console.log(survivor);
        try{
            await survivor.save();
            res.send(survivor)
            console.log(survivor)
        }catch(e){
            console.log(e);
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




