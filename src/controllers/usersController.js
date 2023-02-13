const bcrypt = require("bcryptjs");
const db = require('../database/models');
const {validationResult} = require('express-validator')
const usersController = {

    registro: (req, res) => {
        res.render('users/registro');
    },
    login: (req, res) => { 
        res.render('users/login');
    },
    logout: (req, res) => {
        res.clearCookie('emailUsuario')
        req.session.destroy();
        return res.redirect('/login')
    },
    procesoLogin: (req, res) => {        
        const resultValidacion = validationResult(req)

        if(resultValidacion.errors.length > 0){
            return res.render('users/login', 
            {
                errors: resultValidacion.mapped(),
                oldData: req.body
            })
        } 
        db.Users.findAll({
            where: {
                email: req.body.email
            }
        }).then(user => {
            let contraseñaOk = bcrypt.compareSync(req.body.contrasenia, user[0].dataValues.password)
            if(contraseñaOk) {

                req.session.userLogged = user[0].dataValues;

                if(req.body.remember == "on"){
                    res.cookie('emailUsuario', req.body.email, {maxAge: 1000 * 60})
                }
                
                return res.redirect('/')
            } else {
                res.send('Revise los datos')
            }
        }
        )
        
    },
    crear: (req, res) => {
    
        const resultValidacion = validationResult(req)

        if(resultValidacion.errors.length > 0){
            return res.render('users/registro', 
            {
                errors: resultValidacion.mapped(),
                oldData: req.body
            })
        }
        db.Users.create({
            "name": req.body.nombre,
            "last_name": req.body.apellido,
            "email": req.body.email,
            "password": req.body.contrasenia === req.body.contrasenia2 ? bcrypt.hashSync(req.body.contrasenia,10) :
            res.send('Las contraseñas deben coincidir'),
            "id_category": 1,
            "image": req.file.filename
        })
        res.redirect("/login")
    }
}

module.exports = usersController;