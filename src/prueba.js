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
//aqui indica que ahi se escribiran el codigo react
//app.set('views',path.join(__dirname,'views'))
// asignando motor de planitlla
app.engine('ejs',engine)
//establer el motor de plantilla
app.set('view engine','ejs')
// puerto que da el sistema operativo o puerto 3000
app.set('port', process.env.PORT || 3000)

/* MIDDLEWARES */
// Middlewares son funciones que se ejecutan antes que pasen a las rutas
// como para procesar datos de los archivos clientes mostrando en consola los eventos
//app.use(morgan('dev')) //son los GET/ PORT/ en consola

app.use(express.json())
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
  app.locals.signinMessage = req.flash('signinMessage')
  app.locals.signupMessage = req.flash('signupMessage')
  //trae losd atos de request user
  app.locals.user = req.user
  // que continue con el codigo sino se queda estancado
  next()
})

/* ESTATIC FILES */
// indica que public sera enviado al navegador
app.use(express.static(path.join(__dirname,'../public')))

/* RUTAS */
// Routes INICIA PAGINA
app.use('/api/tasks', require('./routes/rutas'))



// iniciar el servidor
app.listen(app.get('port'), ()=>{
  console.log(`Server on port ${app.get('port')}`)
})
