//Servira para autenticar las constrasenas por nosotros mismo
//existen servers
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User =require('../models/user');

// Serializar para ya no autentizar con pasport
passport.serializeUser((user,done)=>{
    done(null,user.id)
})

//Cada proceos que hace verificara que exista el usuario
passport.deserializeUser(async(id,done)=>{
    const user = await User.findById(id)
    done(null,user)
})


//establecemos como usaremos nuestro metodo
passport.use('local-signup', new LocalStrategy({
    // el valor el el name de form
    usernameField: 'email',
    passwordField: 'password',
    //ademas de emial y contra en req podemos almacner otros datos input
    pasRegToCallback: true
}, async (req, email, password, done) => {
    const user = new User()
    user.email=email
    user.password= password
    //utilizando metodo asincrono de models
    // al guardar le nuevo usuario toma timepo y al guardar recibiremos atracez de una cte y continua con la sgt linea
    await user.save()
    done(null,user)
}));