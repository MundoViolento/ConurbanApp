const express = require('express')
const routerLugar = express.Router()

const { getInicio, getContacto, getNosotros, getZonaNorte, getZonaSur, getZonaOeste, getZonaRecomendados } = require('../controllers/lugares.controllers')

// Routers

routerLugar.get('/inicio', getInicio)
routerLugar.get('/contacto', getContacto)
routerLugar.get('/nosotros', getNosotros)
routerLugar.get('/zona-norte', getZonaNorte)
routerLugar.get('/zona-sur', getZonaSur)
routerLugar.get('/zona-oeste', getZonaOeste)
routerLugar.get('/zona-recomendados', getZonaRecomendados)
// routerLugar.get('/signin', getFormSignin)
// routerLugar.post('/signin', signin)

// routerLugar.get('/logout', logout)

module.exports = routerLugar