const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const upload = require('../../middlewares/multerProducto')

router.get('/detalleProducto/:id/',productoController.detalleProducto);


router.post('/productos/eliminar/:id/',productoController.eliminar);

/*---EDITAR PRODUCTOS---*/
router.get('/productos/editar/:id/',productoController.ver);
router.put('/productos/editar/:id/',productoController.editar);

/*---CREAR PRODUCTOS---*/
router.get('/productos/crear',productoController.verProducto);
router.post('/productos/crear',upload.any(''), productoController.crear);

router.get('/productos',productoController.listar);

module.exports = router;