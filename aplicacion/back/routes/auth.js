const express=require("express");
const { registroUsuario } = require("../controllers/authController");
const router= express.Router();

router.route('/usuario/registro').post(registroUsuario)

module.exports= router //creamos la ruta, post es para crear, route es para crear una ruta, registerUser es el metodo que vamos a ejecutar