const survivorRouter = require('express').Router();
const survivorController = require('./../controllers/survivor')


survivorRouter.get('/:id');
survivorRouter.post('/survivors',survivorController.registerSurvivor);
survivorRouter.get('/survivors', survivorController.getAllSurvivors)




module.exports = survivorRouter

