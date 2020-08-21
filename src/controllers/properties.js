const itemModel = require('./../models/item');
const userModel = require('../models/survior')
module.exports ={

   async getSurvivorProperties(req, res){
        const {user} = req.headers;
        const {survivorId} = req.params;

        const loggedUser = await userModel.findById(user);

        const ak = loggedUser.ak;
        const aid = loggedUser.aid;
        const soup = loggedUser.soup;
        const water = loggedUser.water;

        

    }

}