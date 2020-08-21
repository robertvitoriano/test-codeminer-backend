const reportRouter = require('express').Router();
const reportController = require('../controllers/')


reportRouter.get('/reports/infected',reportController)



