const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const upload = require('../../middlewares/multerProducto')
const middlewareAuth = require('../../middlewares/middlewareAuth');
const path = require('path')
const {body} = require('express-validator'); 

const validaciones = [
    body('nombre').notEmpty().withMessage('Ingrese un Nombre de producto').bail()
    .isLength( { min: 5, max: 20 }).withMessage('Ingrese nombre con minimo 8 caracteres y maximo 20'),
    body('descripcion').notEmpty().withMessage('Ingrese una descripcion de producto').bail()
    .isLength( { min: 20, max: 50 }).withMessage('Ingrese una Contraseña minimo 8 caracteres y maximo 50'),
    body('precio').notEmpty().withMessage('Ingrese un precio para el producto'),
    body('imagen').custom((value, {req}) => {
        let file = req.file;
        let extensionesValidas = ['.jpg', '.png', '.jpeg']

        if(!file){
            throw new Error('Tienes que subir una imagen')
        } else {
            let extensionFile = path.extname(file.originalname);
            if(!extensionesValidas.includes(extensionFile)){
                throw new Error(`Tienes que subir una imagen con extension valida ${extensionesValidas.join(', ')}`)
            }
        }
         
        return true
    })
]
router.get('/detalleProducto/:id/', middlewareAuth, productoController.detalleProducto);

 
router.delete('/productos/eliminar/:id/', middlewareAuth, productoController.eliminar);
router.get('/productos/eliminar/:id/', middlewareAuth, productoController.verEliminar);


/*---EDITAR PRODUCTOS---*/
router.get('/productos/editar/:id/', middlewareAuth, productoController.ver);
router.put('/productos/editar/:id/',middlewareAuth, productoController.editar);

/*---CREAR PRODUCTOS---*/
router.get('/productos/crear',middlewareAuth, productoController.verProducto);
router.post('/productos/crear', upload.single('imagen'), validaciones, productoController.crear);

router.get('/productos', middlewareAuth, productoController.listar);
router.get('/ofertas', middlewareAuth, productoController.listarOfertas);


module.exports = router;