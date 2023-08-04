// user.controller.js
/**********  Este archivo es llamado de user.router.js **********/

//Importamos el modelo 
const jwt = require('jsonwebtoken')
const passport = require('passport');
const User = require('../models/user');
const token_secreto =  process.env.TOKEN_SECRET

const userCtrl = {};
// Este archivo es llamado de Users.router.js

userCtrl.getUsers = async (req,res) => {
  const arregloUsers = await User.find();
  res.json(arregloUsers);
};

userCtrl.signin = (req, res) => {
  // Verifica si el usuario está autenticado
  if (req.isAuthenticated()) {
    const token = jwt.sign({ id: req.user._id }, token_secreto, { expiresIn: 60*60*24 });
    res.json({ auth: true, token: token, success:true });
  } else {
    // La autenticación ha fallado, puedes enviar un mensaje de error
    res.status(401).json({ auth: false, token: null, message: 'Credenciales inválidas' });
  }
};

userCtrl.signup = (req, res) => {
  // Verifica si el usuario está autenticado
  if (req.isAuthenticated()) {
    const token = jwt.sign({ id: req.user._id }, token_secreto, { expiresIn: 60*60*24});
    res.json({ success: true, message: 'Registro exitoso', auth: true, token: token });
  } else {
    res.status(400).json({ success: false, message: 'Credecnailes Error al registrar el usuario' });
  }
};

userCtrl.logout = (req, res) => {
  // Utiliza req.logout() para cerrar la sesión del usuario
  req.logout(() => {
    res.json({ message: 'Sesión cerrada exitosamente' });
  });
};

userCtrl.getUser = (req,res) => res.json({usuario: 'Users de pepito'});

//Esto tiene que ser una consulta con mongo
userCtrl.updateUser = (req,res) => res.json({message: 'Users actualizado'});

userCtrl.deleteUser = (req,res) => res.json({message: 'Users eliminado'});

module.exports = userCtrl;