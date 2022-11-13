const path = require('path');
let productos = [
    {
        id:1,
        nombre: 'COCINA PROFESIONAL',
        descuento: '40% off',
        precio: '$6.770',
        img: 'images/destacado1.PNG'
    },
    {
        id:2,
        nombre: 'COCINA PROFESIONAL',
        descuento: '20% off',
        precio: '$230.000',
        img: 'images/destacado2.PNG'
    },
    {
        id:3,
        nombre: 'Smartlife Horno eléctrico 40 lts',
        descuento: '10% off',
        precio: '$70.500',
        img: 'images/destacado3.PNG'
    },
    {
        id:4,
        nombre: 'Batidora de mesa Smartlife 1000W',
        descuento: '5% off',
        precio: '$23.200',
        img: 'images/destacado4.PNG'
    }
]
const mainController = {
    home: (req, res) => {
        res.render('index', {productos});
    }
}

module.exports = mainController;