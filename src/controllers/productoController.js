const db = require('../database/models'); 

const productoController = {
    detalleProducto: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(producto => {
            res.render('products/detalleProducto', {producto});
        })
    },
    verProducto: (req, res) => {
        res.render('products/crearProducto');
    },
    crear: (req, res) => {
            let img  
      
            if (req.files.length > 0)
            {
                img = req.files[0].filename
                
            }else
            {
                img = 'default.png'
            }
          
            db.Product.create({
                "name": req.body.nombre, // ver por que no lee el nombre
                "description": req.body.descripcion,
                "id_category": req.body.categoria,
                "image": img,
                "price": req.body.precio,
                "id_brand": 1
            })
            res.redirect("/")
    },

    ver: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(producto => {
            res.render('products/editarProducto',{producto});
        })
    },
    verEliminar: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(producto => {
            res.render('products/eliminarProducto',{producto});
        })
    },
    listar: (req, res) => {
        db.Product.findAll()
        .then(productos => {
            res.render('products/listarProducto', {productos});
        })
    },
    listarOfertas: (req, res) => {
        db.Product.findAll()
        .then(productos => {
            res.render('products/listadoOfertas', {productos});
        })
    },
    editar: (req,res) => {

        let id = req.params.id;

        db.Product.update({
            "name": req.body.nombre, // ver por que no lee el nombre
            "description": req.body.descripcion,
            "id_category": req.body.categoria,
            "price": req.body.precio,
        },
        {
            where: {id_product: id}
        })
        res.redirect('/')
    },
    eliminar: (req, res) => {
        let id = req.params.id;

        db.Product.destroy({
            where: {id_product: id}
        })

        res.redirect('/')

    }
}

module.exports = productoController;