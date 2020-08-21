const reportRouter = require('express').Router();
const reportController = require('../controllers/reports')


reportRouter.get('/reports/infected', reportController.getPercentageOfInfected);
reportRouter.get('/reports/noninfected', reportController.getPercentageOfNonInfected);
reportRouter.get("/reports/items",reportController.gePercentagetItemsPerUser);





module.exports = reportRouter;





