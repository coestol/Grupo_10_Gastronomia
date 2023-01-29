const bcrypt = require("bcryptjs");
const db = require('../database/models');

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
        let img 
      
        if (req.files.length > 0)
        {
            img = req.files[0].filename
            
        } else
        { 
            img = 'default.png'
        }
      
        db.Users.create({
            "name": req.body.nombre,
            "last_name": req.body.apellido,
            "email": req.body.email,
            "password": req.body.contrasenia === req.body.contrasenia2 ? bcrypt.hashSync(req.body.contrasenia,10) :
            res.send('Las contraseñas deben coincidir'),
            "id_category": req.body.categoria,
            "image": img
        })
        res.redirect("/login")
    }
}

module.exports = usersController;