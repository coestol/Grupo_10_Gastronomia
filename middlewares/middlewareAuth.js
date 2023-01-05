const User = require('../src/models/User')

function middlewareAuth (req, res, next) {

    if(!req.session.userLogged){
        return res.redirect('/login')
    }
    next()

}

module.exports = middlewareAuth;