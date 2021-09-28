function calcular(){
    let val1 = document.getElementById("num1");
    let num1 = val1.value;
    let val2 = document.getElementById("num2");
    let num2 = val2.value;
    let operacion = document.getElementById("operador").value;
    console.log(operacion);
    
    if(num1 === "" && num2 == ""){
      document.getElementById("operacion").innerHTML = 'ingresa los dos valores';
      val1.style.backgroundColor=  '#FF0000';
      val2.style.backgroundColor=  '#FF0000';
        //alert("tienes que ingresar los 2 numeros para operarlos " );
        console.log('hola mundo');
    } else if(num2 === "" && num1 !== ""){
      document.getElementById("operacion").innerHTML = 'ingresa el valor 2';
      val2.style.backgroundColor=  '#FF0000';
      val1.style.backgroundColor = '#00ff7f';
        //alert("tienes que ingresar los 2 numeros para operarlos " );
        console.log('hola mundo');
    } else if (num2 !== "" && num1 == "") {
      document.getElementById("operacion").innerHTML = 'ingresa el valor 1';
      val1.style.backgroundColor=  '#FF0000';
      val2.style.backgroundColor = '#00ff7f';
    }
    else  {
      val1.style.backgroundColor=  '#00ff7f';
      val2.style.backgroundColor = '#00ff7f';
      if(operacion == "suma"){
      document.getElementById("operacion").innerHTML = num1 + ' + ' + num2 ;
    }
      console.log(operacion);
      document.getElementById("res").innerHTML = operacion;
      //alert("valor uno = " + val1 + "\n valor dos = " + val2);
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