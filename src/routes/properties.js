const survivorModel = require('./../models/survior');
const propertiesController = require('./../controllers/properties');
const propertiesRouter = require('express').Router();

const survivor = require('../controllers/survivor');
express = require('express');
const survivorRouter = express.Router()

propertiesRouter.get('survivor:id/properties', propertiesController.getSurvivorProperties);


module.exports = propertiesRouter;


