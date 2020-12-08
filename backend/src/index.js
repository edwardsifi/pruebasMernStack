//este archivo es el que inicia el servidor
require('dotenv').config()//importa el modulo para las variables de entorno, importa las variables del archivo .env

const app = require('./app');
require('./database');
async function main(){

    await app.listen(app.get('port'));
    console.log('server on port', app.get('port'));
    
}

main();

