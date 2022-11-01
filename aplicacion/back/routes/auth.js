const express=require("express");
const { registroUsuario, loginUser } = require("../controllers/authController");
const router= express.Router();

router.route('/usuario/registro').post(registroUsuario)
router.route('/login').get(loginUser) //ruta para iniciar sesion, llama al metodo loginUser del controlador authController

module.exports= router //creamos la ruta, post es para crear, route es para crear una ruta, registerUser es el metodo que vamos a ejecutar