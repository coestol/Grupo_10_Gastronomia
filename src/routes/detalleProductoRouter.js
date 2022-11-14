const express = require('express');
const router = express.Router();
const detalleProductoController = require('../controllers/detalleProductoController');

router.get('/detalleProducto/:id', detalleProductoController.detalleProducto);
module.exports = router;