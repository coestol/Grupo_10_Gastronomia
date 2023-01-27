module.exports = (sequelize, Datatypes) => {

    let alias = 'Brand';

    let cols = { 
        id_brand: {
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
        tableName: 'brand',
        timestamps: false
    };


    const Brand = sequelize.define(alias, cols, config);

    return Brand;

}