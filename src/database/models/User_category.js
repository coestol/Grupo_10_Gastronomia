module.exports = (sequelize, Datatypes) => {

    let alias = 'User_category';

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
        tableName: 'user_category',
        timestamps: false
    };


    const User_category = sequelize.define(alias, cols, config);

    return User_category;

}