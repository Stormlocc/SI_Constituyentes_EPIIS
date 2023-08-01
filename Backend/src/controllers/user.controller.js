/**********  Este archivo es llamado de user.router.js **********/

//Importamos el modelo 
const passport = require('passport');
const User = require('../models/user');
const userCtrl = {};
// Este archivo es llamado de Users.router.js

userCtrl.signin = (req, res) => {
  // Si la autenticación es exitosa, passport.authenticate habrá colocado el usuario autenticado en req.user
  // Puedes acceder al usuario autenticado con req.user
  // Enviar una respuesta JSON indicando la autenticación exitosa
  res.json({ success: true, message: 'Autenticación exitosa' });
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