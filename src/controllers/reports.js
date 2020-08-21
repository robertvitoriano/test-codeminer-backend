const Survivor = require('./../models/survior');
const Report = require('./../models/report');
module.exports = {
    
    gePercentagetItemsPerUser(req, res){


    },
   async getPercentageOfInfected(req, res){
      
        const survivors = await Survivor.find()
        let infectedCounter = 0;
        let totalUsers=0;
        survivors.map((survivor)=>{
            if(survivor.infected){
                infectedCounter++;
            }
        })

       survivors.map(survivor => {
               totalUsers++;
           
       })
       const average =(( infectedCounter / (totalUsers ))*100).toFixed(2);

        try{

            const report = await Report.create({
                description: "percentage_quantity_of_infected",
                info: average+" %"
            })
            console.log(report);

            res.send(report);

           }catch(e){
            console.log(e)
          }
    
 

    },

  async  getPercentageOfNonInfected(req, res){

        const survivors = await Survivor.find()
        let nonInfectedCounter = 0;
        let totalUsers = 0;
        survivors.map((survivor) => {
            if (!survivor.infected) {
                nonInfectedCounter++;
            }
        })

        survivors.map((survivor) => {
          
                totalUsers++;
            
        })

        const average = ((nonInfectedCounter / (totalUsers)) * 100).toFixed(2);

        try {

            const report = await Report.create({
                description: "percentage_quantity_of_infected",
                info: average +" %"

            })
            console.log(report);

            res.send(report);

        } catch (e) {
            console.log(e)
        }

    },

}