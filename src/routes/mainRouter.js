const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const middlewareAuth = require('../../middlewares/middlewareAuth');

router.get("/", mainController.home);

module.exports = router;