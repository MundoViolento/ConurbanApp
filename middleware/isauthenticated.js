// Esto vamos a usar cuando añadamos las opciones de guardar lugar, lugar favorito, etc..

const isAuthenticated = (req, res, next) => {

    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/auth/signin')
}

module.exports = isAuthenticated
