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
    const token = jwt.sign({ id: req.user._id }, "token_secreto", { expiresIn: 60*60*24 });
    res.json({ auth: true, token: token });
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

// Crea usuario
userCtrl.crearUser = async(req,res) => {
    //que recibe
    console.log(req.body);
    const {email, password} = req.body;
    
    const newUser = new User({
        email: email,
        password: password,
        
    });
    await newUser.save();
    res.json({message: 'guardado'})
    
};


userCtrl.crearUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const newUser = new User({ email, password });
      await newUser.save();
      res.json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
      // Si ocurre un error de validación, envía un objeto con mensajes de error en la respuesta
      res.status(400).json({ error: 'Error al registrar el usuario', validationErrors: error.errors });
    }
  };

userCtrl.getUser = (req,res) => res.json({usuario: 'Users de pepito'});

//Esto tiene que ser una consulta con mongo
userCtrl.updateUser = (req,res) => res.json({message: 'Users actualizado'});

userCtrl.deleteUser = (req,res) => res.json({message: 'Users eliminado'});

module.exports = userCtrl;