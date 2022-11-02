const express=require("express");
const { registroUsuario, loginUser, logOut, forgotPassword, resetPassword } = require("../controllers/authController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router= express.Router();

router.route('/usuario/registro').post(registroUsuario)
router.route('/login').get(loginUser) //ruta para iniciar sesion, llama al metodo loginUser del controlador authController
router.route('/logout').get(isAuthenticatedUser, logOut) //ruta para cerrar sesion, llama al metodo logoutUser del controlador authController y le paso el metodo de cerrar sesión 
router.route('/forgotpassword').post(forgotPassword) //ruta para olvidar contraseña, llama al metodo forgotPassword del controlador authController
router.route('/resetpassword/:token').post(resetPassword) //ruta para resetear contraseña, llama al metodo resetPassword del controlador authController


module.exports= router //creamos la ruta, post es para crear, route es para crear una ruta, registerUser es el metodo que vamos a ejecutar