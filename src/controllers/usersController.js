const path = require('path');
const fs = require('fs');
const usuariosFilePath = path.join(__dirname, '../data/Users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

const usersController = {

    registro: (req, res) => {
        
        res.render('users/registro');
    },
    login: (req, res) => {
        res.render('users/login');
    },
    crear: (req,res) => {
        
        let img 
      
        if (req.files.length > 0)
        {
            img = req.files[0].filename
            
        }else
        {
            img = 'default.png'
        }
      
        let nuevoUsuario = {
            "id": usuarios[usuarios.length-1]["id"]+1 ,
            "Nombre": req.body.nombre, // ver por que no lee el nombre
            "Apellido": req.body.apellido,
            "Email": req.body.email,
            "Contraseña": req.body.contraseña,
            "Categoria": req.body.categoria,
            "Imagen": img,
        }

        usuarios.push(nuevoUsuario)
        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios,null,""))
        res.redirect("/")
    }
}

module.exports = usersController;