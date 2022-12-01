const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productosDB.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productoController = {
    detalleProducto: (req, res) => {
        let id = req.params.id;
        let producto = productos.find(producto => producto.id == id);
        res.render('products/detalleProducto', {producto});
    },
    verProducto: (req, res) => {
        res.render('products/crearProducto');
    },
    crear: (req, res) => {
        let nuevoProducto = {
            "id": productos[productos.length-1]["id"]+1 ,
            "nombre": req.body.nombre, // ver por que no lee el nombre
            "precio": req.body.precio,
            "descuento": req.body.descuento,
            "categoria": req.body.categoria,
            "descripcion": req.body.descripcion,
            "imagen": productos.img,
        }

        console.log(req.body.nombre)
        productos.push(nuevoProducto)
        fs.writeFileSync(productsFilePath, JSON.stringify(productos,null,""))
        res.redirect("/")
    },

    ver: (req, res) => {
        let id = req.params.id;
        let producto = productos.find(producto => producto.id == id);
        res.render('products/editarProducto',{producto});
    },
    listar: (req, res) => {
        res.render('products/listarProducto', {productos});
    },
    editar: (req,res) => {
        let producto = productos.find(producto => producto.id == req.params.id);
        
        let productoEditado = {
            "id": producto.id,
            "nombre": req.body.nombre,
            "descripcion": req.body.descripcion,
            "categoria": req.body.categoria,
            "imagen": req.body.imagen,
            "precio": req.body.precio,
            "descuento": req.body.descuento,
            "imagen": producto.imagen
        };
        
        let productoAeditar = productos.map(producto => {
            if (producto.id == productoEditado.id )
            {
                return producto = productoEditado
            } 
            return producto
        })
        fs.writeFileSync(productsFilePath,JSON.stringify(productoAeditar,null,''));
        res.redirect('/')
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