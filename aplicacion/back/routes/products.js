const express = require('express'); //importamos express 
const router = express.Router(); //creamos un router, para crear rutas 

const {getProducts, newProduct,getProductById,updateProduct,deleteProduct} = require('../controllers/productsController'); //importamos los metodos del controlador, creando el servicio
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/auth'); //importamos los metodos del middleware de autenticacion


router.route('/productos').get(isAuthenticatedUser, authorizeRoles("admin"),getProducts); //creamos la ruta, get es para obtener, post es para crear, route es para crear una ruta, getProducts es el metodo que vamos a ejecutar, createProduct es el metodo que vamos a ejecutar
router.route('/producto/nuevo').post(newProduct); //creamos la ruta, post es para crear, route es para crear una ruta, newProduct es el metodo que vamos a ejecutar
router.route('/producto/:id').get(getProductById); //creamos la ruta, get es para obtener, route es para crear una ruta, getProductById es el metodo que vamos a ejecutar, es necesario el :id para que sepa que es un parametro
router.route('/producto/:id').put(updateProduct); //creamos la ruta, put es para actualizar, route es para crear una ruta, updateProduct es el metodo que vamos a ejecutar, es necesario el :id para que sepa que es un parametro
router.route('/producto/:id').delete(deleteProduct); //creamos la ruta, delete es para eliminar, route es para crear una ruta, deleteProduct es el metodo que vamos a ejecutar, es necesario el :id para que sepa que es un parametro


module.exports = router; //exportamos el modulo para que lo pueda usar el server 
