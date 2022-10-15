//importación de la información de la base de datos

import {vehiculos} from './datos/data.js';

console.log(vehiculos); 

//find
const buscarPlaca=(Placa)=>{ //esa placa va a servir para buscar en el array
    return vehiculos.find(vehiculo=>vehiculo.placa===Placa); //find devuelve el primer elemento que cumpla la condición
}
console.log("buscar por placa");
console.log(buscarPlaca('ABC-123'));

//filter
const buscarMarca=(Marca)=>{
    return vehiculos.filter(vehiculo=>vehiculo.marca===Marca); //filter devuelve un array con todos los elementos que cumplan la condición
} //esa marca va a servir para buscar en el array
console.log("buscar por marca");
console.log(buscarMarca('Toyota')); 