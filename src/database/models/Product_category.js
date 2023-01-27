module.exports = (sequelize, Datatypes) => {

    let alias = 'Product_category';

    let cols = { 
        id_category: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }, 
        name: {
            type: Datatypes.STRING,
            allowNull: false
        }
    }

    let config = {
        tableName: 'product_category',
        timestamps: false
    };


    const Product_category = sequelize.define(alias, cols, config);

    return Product_category;

}