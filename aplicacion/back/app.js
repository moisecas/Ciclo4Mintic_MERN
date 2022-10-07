const express = require('express');
const app = express(); 

app.use(express.json()); //para poder usar json en el body

//importamos las rutas
const products = require('./routes/products'); //importamos el archivo de rutas de productos

//creamos las rutas
app.use('/api/v1', products); //creamos la ruta, use es para usar, /api/v1 es la ruta, products es el archivo de rutas

module.exports = app; //exportamos el modulo