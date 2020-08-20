const survivorRouter = require('express').Router();
const survivorController = require('./../controllers/survivor')


survivorRouter.get('/:id');
survivorRouter.post('/survivors',survivorController.registerSurvivor);
survivorRouter.get('/survivors', survivorController.getAllSurvivors);
survivorRouter.get('/survivors/infected', survivorController.reportInfection);






module.exports = survivorRouter

