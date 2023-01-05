const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const upload = require('../../middlewares/multerProducto')
const middlewareAuth = require('../../middlewares/middlewareAuth');

router.get('/detalleProducto/:id/', middlewareAuth, productoController.detalleProducto);


router.post('/productos/eliminar/:id/', middlewareAuth, productoController.eliminar);

/*---EDITAR PRODUCTOS---*/
router.get('/productos/editar/:id/', middlewareAuth, productoController.ver);
router.put('/productos/editar/:id/',middlewareAuth, productoController.editar);

/*---CREAR PRODUCTOS---*/
router.get('/productos/crear',middlewareAuth, productoController.verProducto);
router.post('/productos/crear',upload.any(''), productoController.crear);

router.get('/productos', middlewareAuth, productoController.listar);
router.get('/ofertas', middlewareAuth, productoController.listarOfertas);


module.exports = router;