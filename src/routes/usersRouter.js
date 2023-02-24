const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const upload = require('../../middlewares/multerUsuarios')
const middlewareInvitado = require('../../middlewares/middlewareInvitado')
const path = require('path')
const db = require('../database/models'); 

const {body} = require('express-validator');
const validacionesLogin = [
    body('email').notEmpty().withMessage('Ingrese un Email').bail()
    .isEmail().withMessage('Ingrese un Email con formato valido'),
    body('contrasenia').notEmpty().withMessage('Ingrese una Contraseña')
]

const validacionesRegistro = [
    body('email').notEmpty().withMessage('Ingrese un Email').bail()
    .isEmail().withMessage('Ingrese un Email con formato valido').bail()
    .custom(async value => {
        let email = await db.Users.findOne({ 
            where: {
                'email': value 
            }
        });
        if (email !== null) {
        return Promise.reject();
        }
    })
    .withMessage('Ese nombre de usuario ya existe.'),
    body('contrasenia').notEmpty().withMessage('Ingrese una Contraseña')
    .isLength( { min: 8, max: 20 }).withMessage('Ingrese una Contraseña minimo 8 caracteres y maximo 20'),
    body('contrasenia2').notEmpty().withMessage('Ingrese una Contraseña')
    .isLength( { min: 8, max: 20 }).withMessage('Ingrese una Contraseña minimo 8 caracteres y maximo 20'),
    body('nombre').notEmpty().withMessage('Ingrese un Nombre')
    .isLength( { min: 2, max: 20 }).withMessage('Ingrese un Nombre con minimo 2 caracteres'),
    body('apellido').notEmpty().withMessage('Ingrese un Apellido')
    .isLength( { min: 2, max: 20 }).withMessage('Ingrese un Apellido minimo 2 caracteres'),
    body('imagen').custom((value, {req}) => {
        let file = req.file;
        let extensionesValidas = ['.jpg', '.png', '.jpeg', '.gif']

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
// validaciones front

/*-----Registro------*/
router.get("/registro", usersController.registro);
router.post("/registro", upload.single('imagen'), validacionesRegistro, usersController.crear)
/*-----Login------*/
router.get("/login", usersController.login);
router.post("/login", validacionesLogin, usersController.procesoLogin);

/*-----Logout------*/
router.get("/logout", usersController.logout);



/*-----API's------*/
router.get("/api/users", usersController.apilistarusuarios);
router.get("/api/users/:id", usersController.apiusuario);


module.exports = router; 
