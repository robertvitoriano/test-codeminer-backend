const SurvivorModel = require('./../models/survior');

module.exports = {

    async registerSurvivor(req,res){
        // const survivor = new SurvivorModel({name:req.body.name,
        //                                     age:req.body.age,                  
        //                                     lastLocation:req.body.lastLocation,           
        //                                     gender:req.body.gender

        //                                    });
        console.log(req.body);
         
         

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




