const db = require('../database/models');


const mainController = {
    home: (req, res) => {
        let estaLogeado = req.session.userLogged ? req.session.userLogged.id_category : 0
        db.Product.findAll()
        .then(products => {
            let sales = products.filter(product => product.id_category === 2)
            let featured = products.filter(product => product.id_category === 1)

            res.render('index', {sales, featured});
            //console.log()
        })
    },
    tarjeta: (req, res) => {
        res.render('tarjeta');
    },
}

module.exports = mainController;