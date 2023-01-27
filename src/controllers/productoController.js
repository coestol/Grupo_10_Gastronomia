const fs = require('fs');
const path = require('path');
const db = require('../database/models');
//const productosDB = db.Product;
const productsFilePath = path.join(__dirname, '../data/productosDB.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
            "id_product": productos[productos.length-1]["id"]+4 ,
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
    }
}

module.exports = productoController;