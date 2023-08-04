//user.route.js
const { Router } = require('express');
const passport = require('passport')
const router = Router();
const { signup, getUsers, deleteUser, signin, logout } = require('../controllers/user.controller')

const jwt = require('jsonwebtoken');
const User = require('../models/user');
const verifyToken = require('../controllers/verifyToken')
const token_secreto = process.env.TOKEN_SECRET

// instanciamos Router() 
// funciona como si fuese la ruta origen una vez se require
//                .get .post . put .delete (creo se llama rest api) seguido de la funcion que hara y la rpta
// podemos responder con  res.send res.json etc esto esta en controller

router.route('/')
  .get(getUsers)

router.route('/signin')
  .post(passport.authenticate('local-signin'), signin)

router.route('/signup')
  .post(passport.authenticate('local-signup'), signup)
//.get(res.json({"hola amigos":"asdf"}))

router.route('/logout')
  .get(logout)

router.route('/me')
  .get(verifyToken, async (req, res, next) => {
    const user = await User.findById(req.id, { password: 0 })  //Que no retorne la constraseña encriptada x seguridad 
    //const user = await User.findById(req.id) 
    if (!user) {
      return res.status(404).send(" no encontree al usuario")
    }
    res.json(user)
  });

router.route('/edit')
  .put(verifyToken, async (req, res, next) => {
    try {
      const { nombres, email, tipo_user, perfil } = req.body; // Recupera los campos a actualizar
      const updatedUser = await User.findByIdAndUpdate(
        req.id,
        {
          $set: {
            nombres: nombres,
            email: email,
            tipo_user: tipo_user,
            'perfil.titulo': perfil.titulo,
            'perfil.capacitacion': perfil.capacitacion,
            'perfil.area': perfil.area,
            'perfil.cargo': perfil.cargo,
            'perfil.lugar': perfil.lugar,
          }
        },
        { new: true } // Devuelve el documento actualizado
      );

      if (!updatedUser) {
        return res.status(404).send("Usuario no encontrado");
      }

      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
  });

  router.route('/addCertificacion')
  .post(verifyToken, async (req, res, next) => {
    try {
      const { certificacionNombre, certificacionFecha } = req.body; // Recupera los campos de la nueva certificación

      const nuevaCertificacion = {
        nombre: certificacionNombre,
        fecha: certificacionFecha,
      };

      const updatedUser = await User.findByIdAndUpdate(
        req.id,
        {
          $push: {
            'perfil.capacitacion': nuevaCertificacion, // Agrega la nueva certificación al arreglo
          },
        },
        { new: true } // Devuelve el documento actualizado
      );

      if (!updatedUser) {
        return res.status(404).send("Usuario no encontrado");
      }

      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
  });



router.route

module.exports = router;