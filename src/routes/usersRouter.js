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
let hayUsuario = false;

const validacionesRegistro = [
    body('email').notEmpty().withMessage('Ingrese un Email').bail()
    .isEmail().withMessage('Ingrese un Email con formato valido').bail()
    .custom((value, {req}) => {
        db.Users.findAll({
            where: {
                email: req.body.email
            }
        })
        .then((user) => {

            if(user.length > 0) {
                hayUsuario = true
            } else {
                hayUsuario = false
            }
        })
        
        if(hayUsuario){
            throw new Error('Ya hay un usuario registrado con este Email')
        }

    return true
    }),
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
/*-----Registro------*/
router.get("/registro", usersController.registro);
router.post("/registro", upload.single('imagen'), validacionesRegistro, usersController.crear)
/*-----Login------*/
router.get("/login", usersController.login);
router.post("/login", validacionesLogin, usersController.procesoLogin);

/*-----Logout------*/
router.get("/logout", usersController.logout);




module.exports = router;  

