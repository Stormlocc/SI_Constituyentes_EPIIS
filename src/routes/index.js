const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('index')
})
//enviar
router.get('/signup',(req,res,next)=>{
    res.render('signup')
})
//escuchar
router.post('/signup',(req,res,next)=>{
    console.log(req.body)
    res.send("recibido")
})
//enviar
router.get('/signin',(req,res,next)=>{
    //res.render('signin')
})
//escuchar
router.post('/signin',(req,res,next)=>{
    //console.log(req.body)
    //res.send("recibido")
})


module.exports = router