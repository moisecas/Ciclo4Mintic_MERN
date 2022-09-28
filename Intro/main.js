// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

var sum = 0; //iniciamos variable en 0 
for (var i = 0; i < 1000; i++) { //ciclo para recorrer los numeros del 0 al 999
    if (i % 3 === 0 || i % 5 === 0) { //preguntamos si el numero es multiplo de 3 o 5 al dividirlo entre 3 o 5 y si el residuo es 0
        sum += i; //si es multiplo de 3 o 5 lo sumamos a la variable sum
    }
}
console.log(sum); //imprimimos el resultado de la suma de los multiplos de 3 o 5 menores a 1000

// Cada nuevo término en la sucesión de Fibonacci se genera sumando los dos términos anteriores. 
//Al comenzar con 1 y 2, los primeros 10 términos serán:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// Al considerar los términos en la sucesión de Fibonacci cuyos valores no superan los cuatro millones, 
//encuentre la suma de los términos de valor par.

var sum = 0; //iniciamos variable en 0
var a = 1; //iniciamos variable a en 1
var b = 2; //iniciamos variable b en 2
while (b < 4000000) { //ciclo para recorrer los numeros de la sucesion de fibonacci menores a 4000000
    if (b % 2 === 0) { //preguntamos si el numero es par al dividirlo entre 2 y si el residuo es 0
        sum += b; //si es par lo sumamos a la variable sum
    }
    var c = a + b; //guardamos en la variable c la suma de a y b
    a = b; //guardamos en la variable a el valor de b
    b = c; //guardamos en la variable b el valor de c
} 
console.log(sum); //imprimimos el resultado de la suma de los numeros pares de la sucesion de fibonacci menores a 4000000

var num = 600851475143; //iniciamos variable num con el numero a factorizar
var factors = []; //iniciamos variable factors como un arreglo vacio
var i = 2; //iniciamos variable i en 2
while (num > 1) { //ciclo para recorrer los numeros menores a 1
    if (num % i === 0) { //preguntamos si el numero es multiplo de i al dividirlo entre i y si el residuo es 0
        factors.push(i); //si es multiplo de i lo agregamos al arreglo factors
        num /= i; //dividimos el numero entre i
    } else {
        i++; //si no es multiplo de i incrementamos i en 1
    }
}
console.log(factors); //imprimimos el arreglo factors

//¿Cuál es el número positivo más pequeño que es divisible por todos los números del 1 al 20?

var num = 1; //iniciamos variable num en 1
var i = 1; //iniciamos variable i en 1
while (i <= 20) { //ciclo para recorrer los numeros del 1 al 20
    if (num % i === 0) { //preguntamos si el numero es divisible entre i al dividirlo entre i y si el residuo es 0
        i++; //si es divisible entre i incrementamos i en 1
    } else {
        num++; //si no es divisible entre i incrementamos num en 1
        i = 1; //reiniciamos i en 1
    }
}
console.log(num); //imprimimos el numero

//SQL Query all columns for all American cities in the CITY table with populations larger than 100000. The CountryCode for America is USA.
//The CITY table is described as follows:

//SELECT * FROM CITY WHERE COUNTRYCODE = 'USA' AND POPULATION > 100000;