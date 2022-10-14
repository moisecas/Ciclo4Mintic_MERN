
//funciones
//calculo de la edad
//definicion de la funcion 
function calcularEdad(anioNacimiento){ //declaracion y datos de entrada de la funcion
    //operaciones, instrucciones
    const anioActual = 2022;
    var calcular = 0

    calcular = anioActual - anioNacimiento; //calculo de la edad
    
    //salida de la funcion 
    return calcular 

} //definicion de la funcion

function mostrarCalculo(){ //llamado de una funcion desde otra funcion
    var anio = document.getElementById ('anionacimiento').value //obtencion de datos de entrada
    var rta = calcularEdad(anio); //llamado de la funcion calcularEdad

    document.getElementById('respuesta').innerHTML = "su edad es: "+rta; //mostrar el resultado
    
}

//llamado a la funcion




