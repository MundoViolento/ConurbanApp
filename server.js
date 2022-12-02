const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

//Configuraciones
const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send('Hola')
})

const Schema = mongoose.Schema

const usuariosSchema = new Schema({
        name: {
            type: String,
            require: true
        },
        lastName: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const usuariosModel = mongoose.model('usuarios', usuariosSchema)

const crearUsuario = (objUsuarios) => {
    const usuarioNuevo = new usuariosModel(objUsuarios)
    return usuarioNuevo
 }

app.get('/create', (req, res) => {

    const obj = {
        name: 'Tomas',
        lastName: 'Godoy',
        email: 'tomasgodoy@gmail.com',
        password: 'ggg'
    }

    const instanciaModeloUsuario = crearUsuario(obj)

    instanciaModeloUsuario.save( err => {
        if (err) throw new Error(`Error en la escritura de la base de datos ${err}`)

        console.log('Escritura OK')

        res.send('Se creó bien!')
    })

})


const iniciar = async () => {
    try {
        
        await mongoose.connect(process.env.URI_MONGO_REMOTA)
        console.log('Base de datos conectada')
        app.listen(PORT)
        console.log(`Conectado al servidor`)

    } catch (error) {
        console.log('Algo paso', error)
    }
}

iniciar()