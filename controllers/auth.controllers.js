const passport = require('passport')
const Auth = require('../models/auth.models')

const getFormSignUp = (req, res) => {
    res.render('auth/signup')
}
const signup = async (req, res) => {
    try {
        
        const errors = []
        const {name, email, password, confirm_password} = req.body

        if ( password !== confirm_password) {
            errors.push({msg: 'La contraseña no coincide.'})
        }

        if ( password.length < 4) {
            errors.push({msg: 'La contraseña debe tener almenos 4 caracteres.'})
        }

        if ( errors.length > 0) {
            res.render('auth/signup', {
                errors,
                name,
                email
            })
        }

        const userFound = await Auth.findOne( { email } )

        if ( userFound ){
            req.flash('error_msg', 'Ya se registro este mail.')
            return res.redirect('/auth/signup')
        }

        const newUser = new Auth({name, email, password})
        newUser.password = await newUser.passwordEncrypt(password)

        await newUser.save()
        req.flash('success_msg', '¡Felicitaciones se registro correctamente, ahora inicie sesión y disfrute!')
        res.redirect('/auth/signup')


    } catch (error) {
        console.log(`Error en signup ${error}`)
    }
}
const getFormSignin = (req, res) => {
    res.render('auth/signup')
}
const signin = passport.authenticate('local', {
    successRedirect: '/inicio',
    failureRedirect: '/auth/signup',
    failureFlash: true
})

const logout = async (req, res) => {
    
    await req.logout(err => {

        if (err) return next()
        req.flash('success_msg', 'Sesión cerrada con exito!')
        res.redirect('/auth/signup')
    })
}

module.exports = {
    getFormSignUp,
    signup,
    getFormSignin,
    signin,
    logout
}