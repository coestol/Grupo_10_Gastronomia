const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.get('/detalleProducto/:id',productoController.detalleProducto);
router.get('/productos/eliminar/:id',productoController.detalleProducto);
router.get('/productos/editar/:id',productoController.editar);
router.put('/productos/editar/:id',productoController.actualizar);
router.get('/productos/crear',productoController.crear);
router.get('/productos',productoController.listar);



module.exports = router;