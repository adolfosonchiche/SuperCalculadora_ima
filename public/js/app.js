function calcular(){
    let val1 = document.getElementById("num1").value;
    let val2 = document.getElementById("num2").value;
    let operacion = document.getElementById("operador").value;
    console.log(operacion);
    if(val1 === "" || val2 === ""){
     
        alert("tienes que ingresar los 2 numeros para operarlos " );
        console.log('hola mundo');
    }else{
      console.log('hola mundo');
      alert("valor uno = " + val1 + "\n valor dos = " + val2);
    }
    document.write('<h1>'+ operacion+' </h1>')
}
