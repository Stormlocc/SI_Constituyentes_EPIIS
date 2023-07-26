require('dotenv').config();
const app = require('./app');
require('./database')

async function main(){
    //desde app.js obtener el port
    await app.listen(app.get('port'));
    console.log("server on port", app.get('port'));
}

//Ejecuta esta funcion por defecto
main();