const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    email : {
        type: String,
        require: true,
        // eliminar espacios
        trim: true,
        // email no debe repetirse en la BD
        unique: true
    },
    
    password: {
        type: String,
        require: true,
        // eliminar espacios
        trim: true
    }
})

//como se llamara, cual es el esquema creado y crea la coleccion
const User = model('User', userSchema);

module.exports = User;