require('dotenv').config();
const app = require('./app');
const passport = require('passport');
const session = require('express-session');

require('./database');
require('./passport/local-auth');

async function main(){
    //middlewares
    app.use(session({
        secret: 'mysecretsession', //Texto secreo
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());


    //desde app.js obtener el port
    await app.listen(app.get('port'));
    console.log("server on port", app.get('port'));
}

//Ejecuta esta funcion por defecto
main();