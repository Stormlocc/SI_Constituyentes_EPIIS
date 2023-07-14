//mongoose no solo es el driver de conezcion 
// tmb es un ORM una especia de abstraccion
const mongoose = require('mongoose')
const {mongodb} = require('./keys')

mongoose.connect(mongodb.URI,{})
    .then(db => console.log("Conectado DB"))
    .catch(err => console.error(err))
