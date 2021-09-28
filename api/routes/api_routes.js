//importamos el modulo express
const express = require('express');
const routes = express.Router();
routes.use(express.json());

routes.get('/historico', (request, response) => {
    console.log('historial de los calculos');
    //response.send('Saludos desde express');
    response.json({historial: [ '1+3+4', '34*5']}).status(201);
});

routes.post('/operacion', (request, response) => {
    console.log(request.body);
    let num1 = request.body["val1"];
    let num2 = request.body["val2"];

    let resultado = parseInt(num1)+ parseInt(num2);
    //response.send('Saludos desde express');
    response.json({operacion: [ num1 + " + " + num2 + " = " + resultado] });
});

module.exports = routes;