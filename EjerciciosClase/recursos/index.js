//consola
console.log('fetchProducts')

//mensajes emergentes de alerta
alert("welcome to the index page");

//tipos de variables en js

//var
var nombre = "Juan"; //variable que puede ser reasignada y redeclarada

//let
let apellido = "Perez"; //variable que puede actializarse

//const
const edad = 30; //variable constante que no cambiar de valor
const estatura = 1.80; 

console.log("mi edad es: " + edad + " y mi estatura es: " + estatura);
console.log(typeof edad); //typeof es para saber el tipo de dato de una variable
alert("mi edad es: " + edad + " y mi estatura es: " + estatura);  

//arreglos 
const numeros = [10, 20, 30, 40, 50]; //arreglo de numeros enteros 
var listaTemperaturas = [10.2, 20, 30.6, 37.5, 9.8]; //arreglo de numeros enteros
console.log(listaTemperaturas); //muestro en la consola el arreglo de temperaturas 
console.log(listaTemperaturas[2]); //muestro en la consola el arreglo de numeros

if(listaTemperaturas[2] > 20){ //si la temperatura es mayor a 20
    console.log("hoy hace calor");
}else{
    console.log("hoy hace frio");
}

//cargar un vector con el numero de vehiculos que transitan por una calle en 10 min y de acuerdo a la siguiente tabla van a identificar si la calle tiene alto trafico o no
//si pasan menos de 10 vehiculos es una calle tranquila
//si pasan entre 10 y 50 vehiculo, es un calle de barrio
//si pasan mas de 50 vehiculos es una avenida pirncipal

const vehiculos = [5, 15, 20, 30, 40, 50, 60, 70, 80, 90]; //cada posicion del arreglo es un minuto
for(let i = 0; i < vehiculos.length; i++){
    if(vehiculos[i] < 10){
        console.log("calle tranquila");
    }else if(vehiculos[i] >= 10 && vehiculos[i] <= 50){
        console.log("calle de barrio");
    }else{
        console.log("avenida principal");
    }
}

