const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productosDB.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productoController = {
    detalleProducto: (req, res) => {
        let producto = productos[req.params.id];
        res.render('products/detalleProducto', {producto});
    },

    crear: (req, res) => {
        res.render('products/crearProducto');
    },
    editar: (req, res) => {
        let producto = productos[req.params.id];
        res.render('products/editarProducto',{producto});
    },
    listar: (req, res) => {
        res.render('products/listarProducto', {productos});
    },
    actualizar: (req,res) => {
        let producto = productos.find(producto => productos.id == req.params.id);
        
        let productoEditado = {
            "id": producto.id,
            "nombre": req.body.nombre,
            "descripcion": req.body.descripcion,
            "categoria": req.body.categoria,
            "imagen": req.body.imagen,
            "precio": req.body.precio,
            "descuento": req.body.descuento,
        };
        
        let productoAeditar = productos.map(producto => {
            if (productoEditado.id  == producto.id)
            {
                return producto = productoEditado
            } 
            return producto
        })
        fs.writeFileSync(productsFilePath,JSON.stringify/(productoAeditar,null,'\-t'));
        /*res.render('detalleProducto',{producto});*/
    },

    eliminar: (req, res) => {
        res.render('products/eliminarProducto/:id');
        let id = req.params.id;
		let productDelete = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(productDelete, null , ''));
		res.redirect('/');
    }
}

module.exports = productoController;