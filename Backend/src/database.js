const mongoose = require('mongoose');

const URI =  process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/EPIIS_constituyentes' ;


mongoose.connect(URI, {
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('DB esta conectado');
});