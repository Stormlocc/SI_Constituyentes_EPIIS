const express = require ('express');
const cors = require('cors')
const app = express();

/************ SETTING ************** */
app.set('port', process.env.PORT || 4000); // se enbia a index.js

/************ MIDDLEWARES ************** */
app.use(cors());//cambiar datos entre servidor
app.use(express.json());//tipo de dato a cambiar

/************ ROUTES ************** */
//recordar que estas rutas operan entre otra app entre servidors

// los parametros son(lo q usas, lo q respondes en f(x))
app.use('/api/perfil',require('./routes/perfil.route'));
app.use('/api/users', require('./routes/user.route'));
app.get('/user',(req,res)=>{res.send('User routes')});

module.exports = app;