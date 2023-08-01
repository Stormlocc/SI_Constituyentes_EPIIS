const {Router} = require('express');
const passport = require('passport')
const router = Router();
const {crearUser, getUser, deleteUser, signin} = require('../controllers/user.controller')

// instanciamos Router() 
// funciona como si fuese la ruta origen una vez se require
//                .get .post . put .delete (creo se llama rest api)
// podemos responder con  res.send res.json etc esto esta en controller

router.route('/')
  .post(passport.authenticate('local-signin'),signin)

  /** 
   * 
  .post(passport.authenticate('local-signup', {
    passReqToCallback: true
  }));
  */
  
router.route('/profile', (req,res,next)=>{
    res.send('holaaaa')
})

module.exports = router;