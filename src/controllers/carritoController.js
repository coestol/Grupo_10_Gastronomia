const path = require('path');

let productos = [
    {
        id:1,
        nombre: 'COCINA PROFESIONAL',
        descuento: '40% off',
        precio: '$6.770',
        img: 'images/destacado1.PNG',
        descripcion: 'iam, eaque ipsa quae ab illo inventore veritatis et quas iam, eaque ipsa quae ab illo inventore veritatis et quas'
    },
    {
        id:2,
        nombre: 'COCINA PROFESIONAL',
        descuento: '20% off',
        precio: '$230.000',
        img: 'images/destacado2.PNG',
        descripcion: 'iam, eaque ipsa quae ab illo inventore veritatis et quas iam, eaque ipsa quae ab illo inventore veritatis et quas'
    },
    {
        id:3,
        nombre: 'Smartlife Horno eléctrico 40 lts',
        descuento: '10% off',
        precio: '$70.500',
        img: 'images/destacado3.PNG',
        descripcion: 'iam, eaque ipsa quae ab illo inventore veritatis et quas iam, eaque ipsa quae ab illo inventore veritatis et quas'
    }
]

const carritoController = {
    carrito: (req, res) => {
        res.render('carritoCompras', {productos});
    }
}

module.exports = carritoController;