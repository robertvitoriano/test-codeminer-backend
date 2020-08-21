const survivorRouter = require('express').Router();
const survivorController = require('./../controllers/survivor');
const propertiesController = require('../controllers/properties');


survivorRouter.get('/survivors/:survivorId', survivorController.getSurvivorById);
survivorRouter.post('/survivors', survivorController.registerSurvivor);
survivorRouter.get('/survivors', survivorController.getAllSurvivors); 
survivorRouter.post('/survivor/:survivorId', survivorController.tradeItems);
survivorRouter.post('/reported/:survivorId', survivorController.reportInfection);
survivorRouter.patch('/:survivorId/update', survivorController.updateSurvivorLocation);
survivorRouter.get('/:survivorId/properties', propertiesController.getSurvivorProperties);







module.exports = survivorRouter

