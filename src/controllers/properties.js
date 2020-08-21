const itemModel = require('./../models/item');
const userModel = require('../models/survior')
module.exports ={

   async getSurvivorProperties(req, res){
        const  {survivorId} = req.params

        const loggedUser = await userModel.findById(survivorId);

        console.log(loggedUser.ak);
        const ak = loggedUser.ak;
        const aid = loggedUser.aid;
        const soup = loggedUser.soup;
        const water = loggedUser.water;

        res.send({ak,aid,soup,water});

    }

}