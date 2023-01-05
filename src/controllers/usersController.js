const User = require('../models/User')
const bcrypt = require("bcryptjs");

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
        let usuarioEnBase = User.findByCampo('Email', req.body.email)

        if(usuarioEnBase) {
            let contraseñaOk = bcrypt.compareSync(req.body.contrasenia, usuarioEnBase.Contraseña)
            if(contraseñaOk) {
                delete usuarioEnBase.Contraseña;
                req.session.userLogged = usuarioEnBase;

                if(req.body.remember == "on"){
                    res.cookie('emailUsuario', req.body.email, {maxAge: 1000 * 60})
                }
                
                return res.redirect('/')
            } else {
                res.send('Revise los datos')
            }
        } else {
            res.send('Revise los datos')
        }
    },
    crear: (req,res) => {
        User.crearUsuario(req,res)
        res.redirect("/")
    }
}

module.exports = usersController;