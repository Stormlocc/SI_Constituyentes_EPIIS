const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

//ARGUMENTOS: Definir el nombre de la funcion, ahora utilizamos la funcion qur recibe 2 parametros ((config), (funcio)=>)
passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return done(null, false, { message: 'El correo electrónico ya está registrado.' });
    }

    const newUser = new User();
    newUser.email = email;
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();

    // Pasa el usuario autenticado al llamar a done
    done(null, newUser);

  } catch (error) {
    done(error);
  }
}));



passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      // El correo electrónico no existe, indica autenticación fallida con mensaje de error específico
      return done(null, false, { message: 'El correo electrónico no existe.' });
    }
    const passwordValid = await user.comparePassword(password);
    if (!passwordValid) {
      // Contraseña incorrecta, indica autenticación fallida
      return done(null, false, { message: 'Contraseña incorrecta.' });
    }
    // Autenticación exitosa, pasa el usuario al callback done
    done(null, user);
  } catch (error) {
    done(error);
  }
}));


//Para mantener la sesiona Activa
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

