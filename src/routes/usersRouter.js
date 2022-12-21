const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const upload = require('../../middlewares/multerUsuarios')

/*-----Registro------*/
router.get("/registro", usersController.registro);
router.post("/registro", upload.any(''),usersController.crear)
/*-----Login------*/
router.get("/login", usersController.login);



module.exports = router;  

