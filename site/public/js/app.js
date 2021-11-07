const { response } = require('express');

async function calcular() {
	let val1 = document.getElementById('num1');
	let num1 = val1.value;
	let val2 = document.getElementById('num2');
	let num2 = val2.value;
	let operacion = document.getElementById('operador').value;
	console.log(operacion);

	if (num1 === '' && num2 == '') {
		document.getElementById('operacion').innerHTML = 'ingresa los dos valores';
		val1.style.backgroundColor = '#FF0000';
		val2.style.backgroundColor = '#FF0000';
		//alert("tienes que ingresar los 2 numeros para operarlos " );
		console.log('hola mundo');
	} else if (num2 === '' && num1 !== '') {
		document.getElementById('operacion').innerHTML = 'ingresa el valor 2';
		val2.style.backgroundColor = '#FF0000';
		val1.style.backgroundColor = '#00ff7f';
		//alert("tienes que ingresar los 2 numeros para operarlos " );
		console.log('hola mundo');
	} else if (num2 !== '' && num1 == '') {
		document.getElementById('operacion').innerHTML = 'ingresa el valor 1';
		val1.style.backgroundColor = '#FF0000';
		val2.style.backgroundColor = '#00ff7f';
	} else {
		val1.style.backgroundColor = '#00ff7f';
		val2.style.backgroundColor = '#00ff7f';
	/*	if (operacion == 'suma') {
			//document.getElementById('operacion').innerHTML = num1 + ' + ' + num2;
		}*/
		console.log(operacion);
		var data = {
			"val1": 5,
			"val2": 10,
			"ope": "suma"
		};
		
		var respuesta = fetch('api/operacion', {
			method: 'POST',
			body: JSON.stringify(data)
		}).then(response => response.json()).then(data => console.log(data))
   
    
  }
	//document.write('<h1>'+ operacion+' </h1>')
}

function myFunction() {
	calcular();
	val1.style.backgroundColor = '#00ff7f';
}

function myFunction2() {
	calcular();
	val2.style.backgroundColor = '#00ff7f';
}
/*
let Actualizar = () => {
  console.log('');
  axios.get('http://localhost:8080/api/historico')
  .then((response) => {
    console.log(response);
  })
  .catch((value) => {
    console.log(value);
  });
};*/

async function Actualizar() {
	let response = await fetch(`http://localhost:8080/api/historico`);

	let data = await response.json();
	console.log(data);
	document.getElementById('hist').innerHTML = data.historial;
	return data;
}
