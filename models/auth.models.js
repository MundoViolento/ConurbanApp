const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const AuthSchema = new mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        user: String,
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

// Methods
// Encripta la contraseña
AuthSchema.methods.passwordEncrypt = async (password) => {
    const salt = await bcrypt.genSalt(10)

    return await bcrypt.hash(password, salt)
}

// Compara la contraseña que ponen en el inicio sesión con la contraseña que tiene almacenado en la DB
AuthSchema.methods.checkPassword = async function(password){
    return await bcrypt.compare(password, this.password) // va a dar true o false
}

module.exports = mongoose.model('Auth', AuthSchema)
