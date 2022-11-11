const express = require('express');
const app = express(); 
const errorMiddleware = require('./middleware/errors'); //importo el middleware de errores
const cookieParser = require('cookie-parser'); //importo el middleware de cookies
const bodyParser = require('body-parser') //evaluar lo que consigo en el body 
const fileUpload = require('express-fileupload') //importo el middleware de subida de archivos, cargas efectivas de archivos

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

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
