//importamos modulo
const { response } = require('express');
const express = require('express');
const routes = express.Router();

//indicamos que utilizaremos el modulo json
routes.use(express.json());

//router para suma
routes.get('/suma', (request, response) => {
	console.log('realizando una suma');
	let { val1, val2 } = request.body;
	response.json({ suma: [ `sumar: ${val1} + ${val2}`, `respuesta: ${val1 + val2}` ] }).status(201);
});

//router para resta
routes.get('/resta', (request, response) => {
	console.log('realizando una resta');
	let { val1, val2 } = request.body;
	response.json({ resta: [ ` restar: ${val1} - ${val2}`, `respuesta: ${val1 - val2}` ] }).status(201);
});

//router para multiplicacion
routes.get('/producto', (request, response) => {
	console.log('realizando una multiplicacion');
	let { val1, val2 } = request.body;
	response.json({ multiplicacion: [ `multiplicar: ${val1} * ${val2}`, ` respuesta: ${val1 * val2}` ] }).status(201);
});

//router para division
routes.get('/division', (request, response) => {
	console.log('realizando una división');
	let { val1, val2 } = request.body;

	if (val2 != 0)
		response.json({ division: [ ` dividir: ${val1} / ${val2}`, `respuesta: ${val1 / val2}` ] }).status(201);
    else 
        response.json({ error: [`indefinido: el numero val2 = ${val2} tiene que ser mayor a cero`]}).status(402)    
});

//router potencia
routes.get('/potencia', (request, response) => {
    console.log('realizando una potencia')
    let {val1, val2} = request.body

    response.json( { potencia: [ `elevar: ${val1} ^ ${val2}`, `respuesta: ${Math.pow(val1, val2)}`]}).status(201)
})

//exportamos el modulo routes para que pueda ser expueto por la appi del worker
module.exports = routes;
