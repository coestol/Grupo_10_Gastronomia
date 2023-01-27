const db = require('../database/models')

const users = db.Users;
const orders = db.Order;
const userCategory = db.User_category;
const productCategory = db.Product_category;
const brand = db.Brand;
const product = db.Product;


module.exports = {

    list: (req, res) => {
        users.findAll()
        .then((data) => {
            res.json(data);
        }
    )
    },
    orders: (req, res) => {
        orders.findAll()
        .then((data) => {
            res.json(data);
        }
    )
    },
    userCategory: (req, res) => {
        userCategory.findAll()
        .then((data) => {
            res.json(data);
        }
    )
    },
    productCategory: (req, res) => {
        productCategory.findAll()
        .then((data) => {
            res.json(data);
        }
    )
    },
    brand: (req, res) => {
        brand.findAll()
        .then((data) => {
            res.json(data);
        }
    )
    },
    product: (req, res) => {
        product.findAll()
        .then((data) => {
            res.json(data);
        }
    )
    }
}