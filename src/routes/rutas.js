const express = require('express')
const router = express.Router()
const passport = require('passport');
const user = require('../models/user')

//Esto lleva a view/index.ejs xq este achivo de rutas es llamado en servidor
router.get('/', (req, res, next) => {
    res.json({status: "estas en index raiz"})
})
/**
 * 
router.get('/', async(req, res, next) => {
    const users = await user.find()
    res.json(users)
    //res.render('index')
})
*/
router.post('/', async(req, res, next) => {
    const {email, password} = req.body
    const newUser = new user({ email, password})
    console.log(newUser)
    await newUser.save();
    res.json({status: "recibido de post y guardado"})
    //res.render('index')
})
router.put('/:id', async(req, res, next) => {
    const {email, password} = req.body
    const editUser = { email, password}
    // parametros(ubicar por id, los datos recibidos)
    await user.findByIdAndUpdate(req.params.id, editUser)
    res.json({status: "recibido de put y editado"})
    //res.render('index')
})
// Al link /signup enviamos el render
router.get('/signup', (req, res, next) => {
    res.json({status: "estas en signup"})
    //res.render('signup')
})
// Del link /signup escuchar segun como definimos el local-auth async
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}))
// Al link /signin enviamos el render
router.get('/signin', (req, res, next) => {
    res.render('signin')
})
// Del link /signin escuchar segun como definimos el local-auth async
router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    passReqToCallback: true
}))

router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err); 
        res.redirect("/");
    })
  })

router.get('/profile',isAuthenticated, (req,res,next)=>{
    res.render('profile')
})

//Middleware que ejecuta antes de acceder a alguna ruta
function isAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    else{
        res.redirect('/')
    }
}

module.exports = router