const express = require('express');
const app = express(); 
const errorMiddleware = require('./middleware/errors'); //importo el middleware de errores
const cookieParser = require('cookie-parser'); //importo el middleware de cookies

app.use(express.json()); //para poder usar json en el body
app.use(cookieParser()); //para poder usar cookies

//importamos las rutas
const products = require('./routes/products'); //importamos el archivo de rutas de productos
const usuarios = require('./routes/auth'); //importamos el archivo de rutas de usuarios
const ordenes = require('./routes/orders'); //importamos el archivo de rutas de ordenes

//creamos las rutas
app.use('/api', products); //creamos la ruta
app.use('/api', usuarios); //creamos la ruta de usuarios 
app.use('/api', ordenes); //creamos la ruta de ordenes

//manejador de errores
app.use(errorMiddleware); //usamos el middleware de errores

module.exports = app; //exportamos el modulo 
