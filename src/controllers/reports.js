const Survivor = require('./../models/survior');
const Report = require('./../models/report');
module.exports = {
    
    getAveragetItemsPerUser(req, res){

    },
   async getAverageOfInfected(req, res){
      
        const survivors = await Survivor.find()
        let infectedCounter = 0;
        let totalUsers=0;
        survivors.map((survivor)=>{
            if(survivor.infected){
                infectedCounter++;
            }
        })

       survivors.map((survivor) => {
           if (!survivor.infected) {
               totalUsers++;
           }
       })
       const average =(( infectedCounter / (totalUsers ))*100).toFixed(2);

        try{

            const report = await Report.create({
                description: "average_quantity_of_infected",
                info: average

            })
            console.log(report);

            res.send(report);

        }catch(e){
            console.log(e)
        }
    
 

    },

    getAverageOfNonInfected(req, res){

    },
    getTotalPointsLost(req, res){

    }
}