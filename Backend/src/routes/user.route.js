const passport = require('passport')
const {Router} = require('express');
const router = Router();
const {crearUser, getUser, deleteUser, getUsersLogin} = require('../controllers/user.controller')

// instanciamos Router() 
// funciona como si fuese la ruta origen una vez se require
//                .get .post . put .delete (creo se llama rest api)
// podemos responder con  res.send res.json etc esto esta en controller
router.route('/')
    .get(getUsersLogin)
    .post(crearUser)
    /*
    .post(passport.authenticate('local-signup', {
        passReqToCallback: true
    }));
    */
    

router.route('/:id')
    .get(getUser)
    .delete(deleteUser);

router.route('/profile', (req,res,next)=>{
    res.send('holaaaa')
})

module.exports = router;