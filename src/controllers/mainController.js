const fs = require('fs');
const path = require('path');
const db = require('../database/models');


const mainController = {
    home: (req, res) => {
        db.Product.findAll()
        .then(productos => {
            res.render('index', {productos});
        })
    }
}

module.exports = mainController;