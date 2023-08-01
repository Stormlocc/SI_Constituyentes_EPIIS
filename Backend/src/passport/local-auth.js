const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

//ARGUMENTOS: Definir el nombre de la funcion, ahora utilizamos la funcion qur recibe 2 parametros ((config), (funcio)=>)
passport.use('local-signup',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true //para que en el sgte argumento reciba mas infomracion- en req
},(req, email, password, done)=>{
    //En done se da una respuesta al cliente
    
}))


