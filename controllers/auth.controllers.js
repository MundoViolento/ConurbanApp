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
            errors.push({msg: 'La contraseña no coincide'})
        }

        if ( password.length < 4) {
            errors.push({msg: 'La contraseña debe tener almenos 4 caracteres'})
        }

        if ( errors.length > 0) {
            return res.send('Hay errores')
        }

        const userFound = await Auth.findOne( { email } )

        if ( userFound ){
            return res.redirect('/auth/signup')
        }

        const newUser = new Auth({name, email, password})
        newUser.password = await newUser.passwordEncrypt(password)

        await newUser.save()
        res.redirect('/inicio')


    } catch (error) {
        console.log(`Error en signup ${error}`)
    }
}
const getFormSignin = (req, res) => {
    res.render('auth/signup')
}
const signin = passport.authenticate('local', {
    successRedirect: '/inicio',
    failureRedirect: '/auth/signup'
})

const logout = async (req, res) => {
    
    await req.logout(err => {

        if (err) return next()

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