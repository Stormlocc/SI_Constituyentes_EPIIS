const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

//ARGUMENTOS: Definir el nombre de la funcion, ahora utilizamos la funcion qur recibe 2 parametros ((config), (funcio)=>)
passport.use('local-signup',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true //para que en el sgte argumento reciba mas infomracion- en req
},async (req, email, password, done)=>{
    //En done se da una respuesta al cliente
    const newUser = new User();
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
    //console.log(newUser)
    await newUser.save();
    //done es un callback que hace devolver el proceso de registro
    done(null,newUser);
}));

passport.use('local-signin',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
},async (email, password, done)=>{
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
          return done(null, false, { message: 'Usuario no encontrado' });
        }
        if (!user.comparePassword(password)) {
          return done(null, false, { message: 'Contraseña incorrecta' });
        }
        done(null, user);
      } catch (error) {
        done(error);
      }
}));

//Para mantener la sesiona Activa
passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
passport.deserializeUser( async (id, done) => {
    const user =  await User.findById(id);
    done(null, user);
});

