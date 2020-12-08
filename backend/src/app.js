//este archivo no inicia el servidor solo lo inicia
const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port',process.env.PORT || 4000);// toma el valor del puerto de la variable de entorno o el puerto 4000


//middlewares
app.use(cors());//con esto ahora permite enviar y resibir datos
app.use(express.json());//con esto ahora el servidor permite entender datos tipo jason y strings

//routes
app.use('/api/users', require('./routes/users'));

app.use('/api/notes', require('./routes/notes'));

module.exports = app;
