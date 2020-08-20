const survivorRouter = require('express').Router();
const survivorController = require('./../controllers/survivor')


survivorRouter.get('/:id');
survivorRouter.post('/survivor',survivorController.registerSurvivor);
survivorRouter.get('/survivor', survivorController.getAllSurvivors)




module.exports = survivorRouter

