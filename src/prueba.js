//Esta pagina genera que ya no cargue el comit de version ADMILTE 1.0
//ARCHIVO principal del servidor
const express = require('express')
const engine = require('ejs-mate')
const path = require('path')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session');
//enviar mensajes entre paginas
const flash = require('connect-flash')

// INICIALIZACIONES
const app = express()
require('./database')
require('./passport/local-auth')

/* SETTINGS */
app.set('views',path.join(__dirname,'views'))
// asignando motor de planitlla
app.engine('ejs',engine)
//establer el motor de plantilla
app.set('view engine','ejs')
// puerto que da el sistema operativo o puerto 3000
app.set('port', process.env.PORT || 3000)
// Middlewares son funciones que se ejecutan antes que pasen a las rutas
// como para procesar datos de los archivos clientes ya sea mostranod en consola los eventos
// passport se utiliza como un middleware
app.use(morgan('dev'))
//recibir los datos desde el cliente (puedem ser json)
app.use(express.urlencoded({extended:false}))
// inicializamos la sesion este archivo no tiene que estar vulnerable
app.use(session({
  secret: 'secreto', // Reemplaza con tu propia clave secreta
  resave: false,
  saveUninitialized: false //sin inilizacion previa
}));

//mensaje entre seesion o paginoa 
app.use(flash())
//recibir autenticacion
app.use(passport.initialize())
app.use(passport.session())
//creando un middwlere por si ya existe usuario
app.use((req, res, next)=>{
  //declarar una vairable glboal en toda la aplicacion
  app.locals.signupMessage = req.flash('signupMessage')
  // que continue con el codigo sino se queda estancado
  next()
})

// Routes INICIA PAGINA
app.use('/', require('./routes/index'))



// iniciar el servidor
app.listen(app.get('port'), ()=>{
  console.log('Server on port',app.get('port'))
})
