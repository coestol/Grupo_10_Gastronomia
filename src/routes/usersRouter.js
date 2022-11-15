const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');


/*-----Registro------*/
router.get("/registro", usersController.registro);

/*-----Login------*/
router.get("/login", usersController.login);


module.exports = router;  

