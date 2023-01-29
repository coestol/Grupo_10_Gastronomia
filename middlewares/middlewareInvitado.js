
function middlewareInvitado (req, res, next) {
    
    if(!req.session.userLogged){
        let emailEnCookie = req.cookies.emailUsuario;
        let usuarioEnBase = User.findByCampo('Email', emailEnCookie)

        req.session.userLogged = usuarioEnBase
    } 
    if(req.session.userLogged){
        return res.redirect('/')
    }
    next()
}

module.exports = middlewareInvitado;