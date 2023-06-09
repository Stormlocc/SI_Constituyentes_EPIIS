//Servira para autenticar las constrasenas por nosotros mismo
//existen servers
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// Serializar para ya no autentizar con pasport
passport.serializeUser((user, done) => {
    done(null, user.id)
})

//Cada proceos que hace verificara que exista el usuario
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
    done(null, user)
})


//establecemos como usaremos nuestro metodo
passport.use('local-signup', new LocalStrategy({
    // el valor el el name de form
    usernameField: 'email',
    passwordField: 'password',
    //ademas de emial y contra en req podemos almacner otros datos input
    passReqToCallback: true
}, async (req, email, password, done) => {
    //Crear una validacion con await para que no sea una promesa tienq ue ejecutar en el moment
    const user = await User.findOne({ email: email })
    if (user) {
        return done(null, false, req.flash('signupMessage', 'email ya existente'))
    } else {
        //crear nuevo usuari
        const newUser = new User()
        newUser.email = email
        //newUser.password= password
        //Guardar pass cifrado
        newUser.password = newUser.encryptPassword(password)
        //utilizando metodo asincrono de models
        // al guardar le nuevo usuario toma timepo y al guardar recibiremos atracez de una cte y continua con la sgt linea
        await newUser.save()
        done(null, newUser)
    }
}));
//establecemos como usaremos nuestro metodo
passport.use('local-signin', new LocalStrategy({
    // el valor el el name de form
    usernameField: 'email',
    passwordField: 'password',
    //para pasar mensajes entre archivos
    passReqToCallback: true
}, async (req, email, password, done) => {
    //Crear validacionn de correo
    const user = await User.findOne({ email: email })
    if (!user) {
        return done(null, false, req.flash('signinMessage', 'user no encontrado'))
    }
    //crear validacion de password
    if (!user.comparePassword(password)) {
        return done(null, false, req.flash('signinMessage', 'constraña incorecta'))
    }
    done(null, user)
}));