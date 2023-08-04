const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const perfilSchema = new mongoose.Schema({
    titulo: [
        { nombre: String, fecha: String }
    ],
    capacitacion: [
        { nombre: String, fecha: String }
    ],
    area: String,
    cargo: String,
    lugar: String
});

const userSchema = new mongoose.Schema({
    email: { type: String, trim: true },
    password: String,
    nombres: String,
    apellidos: String,
    tipo_user: { type: String, trim: true },
    fecha_egresado: String,
    perfil: perfilSchema
});

userSchema.methods.encryptPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
