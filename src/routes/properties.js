const propertiesController = require('./../controllers/properties');
const propertiesRouter = require('express').Router();


propertiesRouter.get('/properties', propertiesController.getSurvivorProperties);


module.exports = propertiesRouter;


