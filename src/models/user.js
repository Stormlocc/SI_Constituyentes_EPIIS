const mongoose = require('mongoose')
//const bcrypt = require('bcrypt-nodejs')
const bcrypt = require('bcryptjs');

const {Schema} = mongoose

//TODO: realizar con una nueva libreria que es const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    email: String,
    password: String,
    //nombre: String
})

//Encriptamos la constra de manera asincrona osea debe espera la pagina
userSchema.methods.encryptPassword = function(password) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
};
// comparar contrase para inciiar sesion
userSchema.methods.comparePassword = function(password) {
    const isMatch = bcrypt.compareSync(password, this.password);
    return isMatch;
  };
//toma el schema y lo guarda en la coleccion users
module.exports = mongoose.model('users', userSchema)

