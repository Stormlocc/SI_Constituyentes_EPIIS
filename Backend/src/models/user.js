const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs');

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

userSchema.methods.encryptPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  };
  

userSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

//como se llamara, cual es el esquema creado y crea la coleccion
const User = model('User', userSchema);

module.exports = User;