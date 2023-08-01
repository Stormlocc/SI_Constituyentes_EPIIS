const {Schema, model} = require('mongoose')
const bcryptjs = require('bcryptjs')

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
});

userSchema.methods.encryptPassword = (password)=>{
    // Que encripte 10 veces la constraseña
    return bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
};

userSchema.methods.comparePassword = function(password){
    return bcryptjs.compareSync(password, this.password)
}

//como se llamara, cual es el esquema creado y crea la coleccion
const User = model('User', userSchema);

module.exports = User;