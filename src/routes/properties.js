const propertiesController = require('./../controllers/properties');
const propertiesRouter = require('express').Router();


propertiesRouter.get('/properties/:survivorId', propertiesController.getSurvivorProperties);


module.exports = propertiesRouter;


