const db = require('../database/models'); 
const {validationResult} = require('express-validator')

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
            const resultValidacion = validationResult(req)

            if(resultValidacion.errors.length > 0){
                return res.render('products/crearProducto', 
                {
                    errors: resultValidacion.mapped(),
                    oldData: req.body
                })
            } 
          
            db.Product.create({
                "name": req.body.nombre, // ver por que no lee el nombre
                "description": req.body.descripcion,
                "id_category": 1,
                "image": req.file.filename,
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
        db.Product.findAll({
            where: {id_category: 2}
        })
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
    },
    
    apilistar: (req, res) => {
        db.Product.findAll()
        .then(productos => {
            return res.status(200).json({
                count: productos.length,
                countByCategory: 1,
                productos: productos,
                status: 200
            })
        })
    },
    apiproducto: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(producto => {
            return res.status(200).json({
                data: producto,
                status: 200
            })
        })
    }
}

module.exports = productoController;