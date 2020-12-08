//crea la conexion a la base de datos de mongodb
const mongoose = require('mongoose');
// console.log(process.env.MONGODB_URI);

//process es un objeto de javascript que node usa para acceder al sistema operativo, aqui accedemos a las variables de entorno
//usa un operardor ternario para hacer la validacion de si existe la variable de entorno y tomarla sino toma otra ruta por defecto y crea una nueva base de datos
const URI = process.env.MONGODB_URI  
            ? process.env.MONGODB_URI 
            : 'mongodb://localhost/databasetest';

mongoose.connect(URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () =>{
    console.log('db is connected');
});