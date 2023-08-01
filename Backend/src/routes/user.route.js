const {Router} = require('express');
const passport = require('passport')
const router = Router();
const {signup, getUser, deleteUser, signin, logout} = require('../controllers/user.controller')

// instanciamos Router() 
// funciona como si fuese la ruta origen una vez se require
//                .get .post . put .delete (creo se llama rest api)
// podemos responder con  res.send res.json etc esto esta en controller

router.route('/')
  .get((res,req)=>res.send('hola amigos'))

router.route('/signin')
  .post(passport.authenticate('local-signin'),signin)

router.route('/signup')
  .post(passport.authenticate('local-signup'),signup)

router.route('/logout')
  .get(logout)


router.route('/:id')
    .get(getUser)
    .delete(deleteUser);

router.route('/profile', (req,res,next)=>{
    res.send('holaaaa')
})

module.exports = router;