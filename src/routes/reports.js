const reportRouter = require('express').Router();
const reportController = require('../controllers/reports')


reportRouter.get('/reports/infected', reportController.getPercentageOfInfected);
reportRouter.get('/reports/noninfected', reportController.getPercentageOfNonInfected);





module.exports = reportRouter;





