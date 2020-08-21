const reportRouter = require('express').Router();
const reportController = require('../controllers/reports')


reportRouter.get('/reports/infected', reportController.getAverageOfInfected);





module.exports = reportRouter;





