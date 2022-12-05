const express = require('express')
const { engine } = require('express-handlebars')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')

//Configuraciones
require('dotenv').config()
const app = express()

require('./config/passport')

app.engine('hbs', engine(
    {
        extname: '.hbs'
    }
))
app.set('view engine', 'hbs')

// Constantes
const PORT = process.env.PORT

// Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.URI_MONGO_REMOTA })
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// Variables globales
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    res.locals.user = req.user || null
    next()
})

// Routes
app.use('/', require('./routes/lugares.routes'))
app.use('/auth', require('./routes/auth.routes'))


const iniciar = async () => {
    try {
        
        await mongoose.connect(process.env.URI_MONGO_REMOTA)
        console.log('Base de datos conectada')
        app.listen(PORT)
        console.log(`Conectado al servidor ${PORT}`)

    } catch (error) {
        console.log('Algo paso', error)
    }
}

iniciar() 