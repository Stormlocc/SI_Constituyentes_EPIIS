const {Schema, model} = require('mongoose')
const User = require('./user'); // Importa el esquema "User" desde su archivo

const perfilSchema = new Schema({
    nombres : {
        type: String,
        require: true
    },

    apellidos: {
        type: String,
        require: true
    },

    tipo_user: {
        type: String,
        require: true
    },

    fecha: {
        type: Date,
        default: Date.now
    },
    // Utiliza el esquema "User" como subdocumento
    user : {
        type: User.schema,
        require: true,

    }

}, {
    //guardar fecha de creacion y modificacion
    timestamps : true
})

//como se llamara, cual es el esquema creado y crea la coleccion
const Perfil = model('Perfil', perfilSchema)

module.exports = Perfil;