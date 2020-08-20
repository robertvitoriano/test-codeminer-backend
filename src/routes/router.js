const router = require('express').Router();
const survivorRouter = require('./survivor');
const propertiesRouter = require('./properties');


router.use(propertiesRouter);
router.use(survivorRouter);





module.exports =  router;

