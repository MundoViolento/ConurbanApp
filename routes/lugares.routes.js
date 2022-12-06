const express = require('express')
const routerLugar = express.Router()

const { getInicio, getContacto, getNosotros, getZonaNorte, getZonaSur, getZonaOeste, getZonaRecomendados, getPerfil } = require('../controllers/lugares.controllers')
const isAuthenticated = require('../middleware/isauthenticated')

// Routers

routerLugar.get('/inicio', getInicio)
routerLugar.get('/contacto', getContacto)
routerLugar.get('/nosotros', getNosotros)
routerLugar.get('/Mi-Perfil',isAuthenticated ,getPerfil)

routerLugar.get('/zona-norte', getZonaNorte)
routerLugar.get('/zona-sur', getZonaSur)
routerLugar.get('/zona-oeste', getZonaOeste)
routerLugar.get('/zona-recomendados', getZonaRecomendados)

module.exports = routerLugar