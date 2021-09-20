//modoulos a utilizar
const express = require('express');
const app = express();
const path = require('path');
const puerto = 4000;
let body = require('body-parser')        



//app.use(bodyParser.urlencoded({ extended: true }))
app.use(body.json());

const apiRoutes = require('./routes/api_routes');

app.use('/', apiRoutes);

//iniciamos el servidor
app.listen(puerto, () => console.log('API escuchando en el puerto 4000'));