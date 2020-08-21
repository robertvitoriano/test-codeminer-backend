const Survivor = require('./../models/survior');
const Report = require('./../models/report');
module.exports = {
    
    getAveragetItemsPerUser(req, res){

    },
   async getAverageOfInfected(req, res){
        const survivors = await Survivor.find()
        let infectedCounter = 0;
        survivors.map((survivor)=>{
            if(survivor.infected){
                infectedCounter++;
            }
            console.log(infected);
        })


    },
    getAverageOfInfected(req, res){

    },
    getAverageOfNonInfected(req, res){

    },
    getTotalPointsLost(req, res){

    }
}