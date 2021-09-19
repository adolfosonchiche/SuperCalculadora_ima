function calcular(){
    let val1 = document.getElementById("num1").value;
    let val2 = document.getElementById("num2").value;
    let operacion = document.getElementById("operador").value;
    if(val1 === "" || val2 === ""){
     
        console.log("tienes que ingresar los 2 numeros para operarlos " );
        console.log('hola mundo');
    }else{
      console.log('hola mundo');
      console.log("valor uno = " + val1 + "\n valor dos = " + val2);
    }
    document.getElementById('cont3').innerHTML= '<h3>'+ operacion+' </h3>';
}
