const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const {Schema} = mongoose

const userSchema = new Schema({
    email: String,
    password: String,
    nombre: String
})

//Encriptamos la constra de manera asincrona osea debe espera la pagina
userSchema.methods.encryptPassword = (password)=>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
// comparar contrase para inciiar sesion
userSchema.method.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password)
}
//toma el schema y lo guarda en la coleccion users
module.exports = mongoose.model('users', userSchema)

