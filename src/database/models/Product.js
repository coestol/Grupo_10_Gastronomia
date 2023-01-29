module.exports = (sequelize, Datatypes) => {

    let alias = 'Product';

    let cols = {
        id_product: {//ver como poner que este es una FK
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        description: {
            type: Datatypes.STRING,
            allowNull: false
        },
        id_category: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }, 
        image: {
            type: Datatypes.STRING,
            allowNull: false
        },
        price: {
            type: Datatypes.DOUBLE,
            allowNull: false
        },
        id_brand: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }
    }

    let config = {
        tableName: 'Product',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;

}