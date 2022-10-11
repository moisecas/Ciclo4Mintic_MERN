const express = require('express');
const app = express(); 

app.use(express.json()); //para poder usar json en el body

//importamos las rutas
const products = require('./routes/products'); //importamos el archivo de rutas de productos

//creamos las rutas
app.use('/api', products); //creamos la ruta

module.exports = app; //exportamos el modulo