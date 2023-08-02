//user.route.js
const {Router} = require('express');
const passport = require('passport')
const router = Router();
const {signup, getUsers, deleteUser, signin, logout} = require('../controllers/user.controller')

const jwt = require('jsonwebtoken');
const User = require('../models/user');
const verifyToken = require('../controllers/verifyToken')
const token_secreto =  process.env.TOKEN_SECRET

// instanciamos Router() 
// funciona como si fuese la ruta origen una vez se require
//                .get .post . put .delete (creo se llama rest api) seguido de la funcion que hara y la rpta
// podemos responder con  res.send res.json etc esto esta en controller

router.route('/')
  .get(getUsers)

router.route('/signin')
  .post(passport.authenticate('local-signin'),signin)

router.route('/signup')
  .post(passport.authenticate('local-signup'),signup)

router.route('/logout')
  .get(logout)

router.route('/me')
  .get(verifyToken, async (req, res, next) => {
    const user = await User.findById(req.id, {password: 0})  //Que no retorne la constraseña encriptada x seguridad 
    //const user = await User.findById(req.id) 
    if(!user){
      return res.status(404).send(" no encontree al usuario")
    }

    res.json(user)
  });


module.exports = router;