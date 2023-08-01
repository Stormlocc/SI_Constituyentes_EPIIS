const express = require ('express');
const cors = require('cors')
const session = require('express-session');
const passport = require('passport');

const app = express();

/************ SETTING ************** */
app.set('port', process.env.PORT || 4000); // se enbia a index.js

/************ MIDDLEWARES ************** */
app.use(cors());//cambiar datos entre servidor
app.use(express.json());//tipo de dato a cambiar
// Configurar sesiones
app.use(session({
    secret: 'mysecretsession', // Texto secreto
    resave: false,
    saveUninitialized: false,
  }));
app.use(passport.initialize());
app.use(passport.session());

/************ ROUTES ************** */
//recordar que estas rutas operan entre otra app entre servidors

// los parametros son(lo q usas, lo q respondes en f(x))
app.use('/api/perfil',require('./routes/perfil.route'));
app.use('/api/users', require('./routes/user.route'));
//Los url no deben continuar con alguno ejm user/lognin y otro user/lognin/sign xq ocaciona conflictos 

app.get('/user',(req,res)=>{res.send('User routes')});

module.exports = app;