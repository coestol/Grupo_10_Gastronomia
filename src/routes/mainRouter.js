const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');


router.get("/", mainController.home);
router.get("/tarjeta", mainController.tarjeta);
//router.get("/productos", productosController.product);







module.exports = router;