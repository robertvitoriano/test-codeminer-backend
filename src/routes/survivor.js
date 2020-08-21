const survivorRouter = require('express').Router();
const survivorController = require('./../controllers/survivor')


survivorRouter.get('/:id',survivorController.getSurvivorById);
survivorRouter.post('/survivors',survivorController.registerSurvivor);
survivorRouter.get('/survivors/all', survivorController.getAllSurvivors);
survivorRouter.post('/survivor/:survivorId', survivorController.tradeItems);






module.exports = survivorRouter

