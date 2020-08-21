const userModel = require('../models/survivor')
module.exports ={

   async getSurvivorProperties(req, res){
        const {survivorId} = req.params

        const loggedUser = await userModel.findById(survivorId);

        const AK47 = loggedUser.ak;
        const First_Aid_Pouch = loggedUser.aid;
        const Campbell_Soup = loggedUser.soup;
        const  Fiji_Water = loggedUser.water;

        res.send({ AK47, First_Aid_Pouch, Campbell_Soup, Fiji_Water });

    }
}