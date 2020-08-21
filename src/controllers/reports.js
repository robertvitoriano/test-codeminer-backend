const Survivor = require('../models/survivor');
const Report = require('./../models/report');
module.exports = {

    async gePercentagetItemsPerUser(req, res) {
        let akCounter = 0;
        let aidCounter = 0;
        let waterCounter = 0;
        let soupCounter = 0;
        let nonInfectedCounter = 0;
        const survivors = await Survivor.find();

      
        survivors.map((survivor) => {
            akCounter = akCounter + parseInt(survivor.ak)
            aidCounter = aidCounter + parseInt(survivor.aid);
            waterCounter = waterCounter + parseInt(survivor.water);
            soupCounter = soupCounter + parseInt(survivor.soup);

            if (!survivor.infected) {
                nonInfectedCounter++;
            }
        })
        akCounter = akCounter/nonInfectedCounter;
        waterCounter = waterCounter / nonInfectedCounter;
        aidCounter = aidCounter / nonInfectedCounter;
        soupCounter = soupCounter / nonInfectedCounter;
         
        const waterAverage = parseFloat(waterCounter).toFixed(2);
        const aidAverage = parseFloat(aidCounter).toFixed(2);
        const soupAverage = parseFloat(soupCounter).toFixed(2);
        const akAverage = parseFloat(akCounter).toFixed(2)


        try {
            const report = await Report.create({
              description: "average_of_each_item_per user",
              info: "ak: " + akAverage + ", " + "water: " + waterAverage + ", "+"soup: "+soupAverage+", "+"aid: "+aidAverage
            });
            console.log(report);

            res.send(report);
        } catch (e) {
            console.log(e);
        }
    },
    async getPercentageOfInfected(req, res) {

        const survivors = await Survivor.find()
        let infectedCounter = 0;
        let totalUsers = 0;
        survivors.map((survivor) => {
            totalUsers++;

            if (survivor.infected) {
                infectedCounter++;
            }
        })

        const average = ((infectedCounter / (totalUsers)) * 100).toFixed(2);

        try {

            const report = await Report.create({
                description: "percentage_quantity_of_infected",
                info: average + " %"
            })
            console.log(report);

            res.send(report);

        } catch (e) {
            console.log(e)
        }



    },

    async getPercentageOfNonInfected(req, res) {

        const survivors = await Survivor.find()
        let nonInfectedCounter = 0;
        let totalUsers = 0;
        survivors.map((survivor) => {
            totalUsers++;

            if (!survivor.infected) {
                nonInfectedCounter++;
            }
        })

        const average = ((nonInfectedCounter / (totalUsers)) * 100).toFixed(2);

        try {

            const report = await Report.create({
                description: "percentage_quantity_of_infected",
                info: average + " %"

            })
            console.log(report);

            res.send(report);

        } catch (e) {
            console.log(e)
        }

    },

}