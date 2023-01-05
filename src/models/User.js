const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs");

const User = {
    fileName: path.join(__dirname, '../data/Users.json'),

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },
    findAll: function () {
        return this.getData()
    },
    finfByPK: function (id) {
        let usuarios = this.findAll();
        let usuarioEncontrado = usuarios.find(usuario => usuario.id == id)
        return usuarioEncontrado;
    },
    findByCampo: function (campo, texto) {
        let usuarios = this.findAll();
        let usuarioEncontrado = usuarios.find(usuario => usuario[campo] == texto)
        return usuarioEncontrado;
    }, 
    deleteUser: function (id){
        let usuarios = this.findAll();
        let usuariosFiltrados = usuarios.filter(usuario => usuario.id !== id)
        fs.writeFileSync(this.fileName, JSON.stringify(usuariosFiltrados,null,""))
        return true
    },  
    crearUsuario: function (req, res) {
        let usuarios = this.findAll();
        let img 
      
        if (req.files.length > 0)
        {
            img = req.files[0].filename
            
        } else
        { 
            img = 'default.png'
        }
      
        let nuevoUsuario = {
            "id": usuarios[usuarios.length-1]["id"]+1 ,
            "Nombre": req.body.nombre, // ver por que no lee el nombre
            "Apellido": req.body.apellido,
            "Email": req.body.email,
            "Contraseña": req.body.contrasenia === req.body.contrasenia2 ? bcrypt.hashSync(req.body.contrasenia,10) :
            res.send('Las contraseñas deben coincidir'),
            "Categoria": req.body.categoria,
            "Imagen": img,
        }

        usuarios.push(nuevoUsuario)
        fs.writeFileSync(this.fileName, JSON.stringify(usuarios,null,""))
    }

}

module.exports = User;