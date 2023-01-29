module.exports = (sequelize, Datatypes) => {

    let alias = 'Users';

    let cols = {
        id_user: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }, 
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        last_name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false
        },
        id_category: {
            type: Datatypes.INTEGER,
            allowNull: false
            //ver como poner que este es una FK
        },
        image: {
            type: Datatypes.STRING,
            allowNull: false
        }
    }

    let config = {
        tableName: 'users',
        timestamps: false
    };

    const Users = sequelize.define(alias, cols, config);

    return Users;

}