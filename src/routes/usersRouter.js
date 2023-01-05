const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const upload = require('../../middlewares/multerUsuarios')
const middlewareInvitado = require('../../middlewares/middlewareInvitado')


/*-----Registro------*/
router.get("/registro", middlewareInvitado, usersController.registro);
router.post("/registro", upload.any(''),usersController.crear)
/*-----Login------*/
router.get("/login", middlewareInvitado, usersController.login);
router.post("/login", middlewareInvitado, usersController.procesoLogin);

/*-----Logout------*/
router.get("/logout", usersController.logout);




module.exports = router;  

