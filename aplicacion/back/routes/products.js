const express = require('express'); //importamos express 
const router = express.Router(); //creamos un router, para crear rutas 

const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productsController'); //importamos los metodos del controlador, creando el servicio

router.route('/productos').get(getProducts); //creamos la ruta, get es para obtener, post es para crear, route es para crear una ruta, getProducts es el metodo que vamos a ejecutar, createProduct es el metodo que vamos a ejecutar

module.exports = router; //exportamos el modulo para que lo pueda usar el server 
