const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productosDB.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const mainController = {
    home: (req, res) => {
        res.render('index', {productos});
    }
}

module.exports = mainController;