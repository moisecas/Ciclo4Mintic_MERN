const express = require('express');
const app = express(); 
const errorMiddleware = require('./middleware/errors'); //importo el middleware de errores

app.use(express.json()); //para poder usar json en el body

//importamos las rutas
const products = require('./routes/products'); //importamos el archivo de rutas de productos
const usuarios = require('./routes/auth'); //importamos el archivo de rutas de usuarios

//creamos las rutas
app.use('/api', products); //creamos la ruta
app.use('/api', usuarios); //creamos la ruta de usuarios 

//manejador de errores
app.use(errorMiddleware); //usamos el middleware de errores

module.exports = app; //exportamos el modulo 
