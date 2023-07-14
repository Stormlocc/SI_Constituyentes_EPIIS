const express = require('express')
const router = express.Router()
const passport = require('passport');

router.get('/', (req, res, next) => {
    res.render('index')
})
//enviar
router.get('/signup', (req, res, next) => {
    res.render('signup')
})
//escuchar      segun como definimos el local-auth async
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}))
//enviar
router.get('/signin', (req, res, next) => {
    //res.render('signin')
})
//escuchar
router.post('/signin', (req, res, next) => {
    //console.log(req.body)
    //res.send("recibido")
})

router.get('/profile',(req,res,next)=>{
    res.render('profile')
})

module.exports = router