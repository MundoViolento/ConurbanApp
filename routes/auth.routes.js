const express = require('express')
const routerAuth = express.Router()

const { getFormSignUp, signup, getFormSignin, signin, logout } = require('../controllers/auth.controllers')

// Routers

routerAuth.get('/signup', getFormSignUp)
routerAuth.post('/signup', signup)

routerAuth.get('/signin', getFormSignin)
routerAuth.post('/signin', signin)

routerAuth.get('/logout', logout)

module.exports = routerAuth