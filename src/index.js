//modoulos a utilizar
const express = require('express');
const app = express();
const path = require('path');
const puerto = 4000;

//recursos a utilizar en la carpeta public
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

//establecer vistas
app.set('views', './views');
app.set('view engine', 'ejs');

//responder a cada solicitud del cliente
app.get('/', (request, response) => {
    response.render('index');
});

app.get('/about', (request, response) => {
    response.status(201).sendFile(path.join(__dirname, '../views/about.html'));
});

app.use((request, response, next) => {
    response.status(404).sendFile(path.join(__dirname, '../views/404.html'));
});

app.listen(puerto, () => console.log('Escuchando en el puerto 4000'));