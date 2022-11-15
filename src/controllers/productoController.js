const path = require('path');

let productos = [
    {
        id:1,
        nombre: 'COCINA PROFESIONAL',
        descuento: '40% off',
        precio: '$6.770',
        img: 'images/destacado1.PNG',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu ex, rhoncus ac porttitor gravida, sagittis vel diam. Phasellus et nunc vitae urna lacinia tincidunt a et urna. Aliquam aliquam interdum nisl, in sagittis dolor dapibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam congue risus bibendum pulvinar imperdiet. Pellentesque suscipit tempor tortor quis sollicitudin. Aliquam ligula sapien, tempor et justo eu, venenatis malesuada massa. Aliquam semper scelerisque ante id mollis. Nunc non ante vehicula nisl volutpat euismod. Nam turpis nibh, ullamcorper in gravida vitae, feugiat ac lectus.'
    },
    {
        id:2,
        nombre: 'COCINA PROFESIONAL',
        descuento: '20% off',
        precio: '$230.000',
        img: 'images/destacado2.PNG',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu ex, rhoncus ac porttitor gravida, sagittis vel diam. Phasellus et nunc vitae urna lacinia tincidunt a et urna. Aliquam aliquam interdum nisl, in sagittis dolor dapibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam congue risus bibendum pulvinar imperdiet. Pellentesque suscipit tempor tortor quis sollicitudin. Aliquam ligula sapien, tempor et justo eu, venenatis malesuada massa. Aliquam semper scelerisque ante id mollis. Nunc non ante vehicula nisl volutpat euismod. Nam turpis nibh, ullamcorper in gravida vitae, feugiat ac lectus.'
    },
    {
        id:3,
        nombre: 'Smartlife Horno eléctrico 40 lts',
        descuento: '10% off',
        precio: '$70.500',
        img: 'images/destacado3.PNG',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu ex, rhoncus ac porttitor gravida, sagittis vel diam. Phasellus et nunc vitae urna lacinia tincidunt a et urna. Aliquam aliquam interdum nisl, in sagittis dolor dapibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam congue risus bibendum pulvinar imperdiet. Pellentesque suscipit tempor tortor quis sollicitudin. Aliquam ligula sapien, tempor et justo eu, venenatis malesuada massa. Aliquam semper scelerisque ante id mollis. Nunc non ante vehicula nisl volutpat euismod. Nam turpis nibh, ullamcorper in gravida vitae, feugiat ac lectus.'
    },
    {
        id:4,
        nombre: 'Batidora de mesa Smartlife 1000W',
        descuento: '5% off',
        precio: '$23.200',
        img: 'images/destacado4.PNG',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu ex, rhoncus ac porttitor gravida, sagittis vel diam. Phasellus et nunc vitae urna lacinia tincidunt a et urna. Aliquam aliquam interdum nisl, in sagittis dolor dapibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam congue risus bibendum pulvinar imperdiet. Pellentesque suscipit tempor tortor quis sollicitudin. Aliquam ligula sapien, tempor et justo eu, venenatis malesuada massa. Aliquam semper scelerisque ante id mollis. Nunc non ante vehicula nisl volutpat euismod. Nam turpis nibh, ullamcorper in gravida vitae, feugiat ac lectus.'
    }
]

const productoController = {
    detalleProducto: (req, res) => {
        let producto = productos[req.params.id];
        res.render('detalleProducto', {producto});
    },

    crear: (req, res) => {
        res.render('crearProducto');
    },
    editar: (req, res) => {
        res.render('editarProducto');
    },
    listar: (req, res) => {
        res.render('listarProducto', {productos});
    }
}

module.exports = productoController;