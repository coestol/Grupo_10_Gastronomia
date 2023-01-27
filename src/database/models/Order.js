module.exports = (sequelize, Datatypes) => {

    let alias = 'Order';

    let cols = { 
        nro_order: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        id_product: {//ver como poner que este es una FK
            type: Datatypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        id_user: {//ver como poner que este es una FK
            type: Datatypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        date_order:{
            type: Datatypes.DATE,
            allowNull: false
        }
    }

    let config = {
        tableName: 'Order',
        timestamps: false
    };


    const Order = sequelize.define(alias, cols, config);

    return Order;

}