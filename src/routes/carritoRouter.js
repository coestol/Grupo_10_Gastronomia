const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');
const middlewareAuth = require('../../middlewares/middlewareAuth');

router.get("/carritoCompras", middlewareAuth, carritoController.carrito);

module.exports = router;