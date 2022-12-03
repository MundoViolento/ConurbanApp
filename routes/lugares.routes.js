const express = require('express')
const routerLugar = express.Router()

const { getInicio, getContacto, getNosotros, getZonaX, getCard } = require('../controllers/lugares.controllers')

// Routers

routerLugar.get('/inicio', getInicio)
routerLugar.get('/contacto', getContacto)
routerLugar.get('/nosotros', getNosotros)
routerLugar.get('/zonaX', getZonaX)
routerLugar.get('/card', getCard)
// routerLugar.get('/signin', getFormSignin)
// routerLugar.post('/signin', signin)

// routerLugar.get('/logout', logout)

module.exports = routerLugar