const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const middlewareAuth = require('../../middlewares/middlewareAuth');
const productosController = require('../controllers/productosController');


router.get("/", mainController.home);
router.get("/usuarios", productosController.list);
router.get("/orders", productosController.orders);
router.get("/userCategory", productosController.userCategory);
router.get("/productCategory", productosController.productCategory);
router.get("/marcas", productosController.brand);
//router.get("/productos", productosController.product);







module.exports = router;