const router = require('express').Router();
const survivorRouter = require('./survivor');
const propertiesRouter = require('./properties');
const reportsRouter = require('./reports');


router.use(propertiesRouter);
router.use(survivorRouter);
router.use(reportsRouter);





module.exports =  router;

