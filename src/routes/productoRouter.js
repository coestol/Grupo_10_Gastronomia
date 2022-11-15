const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.get('/detalleProducto/:id',productoController.detalleProducto);
router.get('/productos/editar/',productoController.editar);
router.get('/productos/crear',productoController.crear);
router.get('/productos/listar',productoController.listar);



module.exports = router;