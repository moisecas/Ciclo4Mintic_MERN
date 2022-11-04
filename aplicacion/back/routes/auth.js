const express=require("express");

const { registroUsuario, loginUser, logOut, forgotPassword, resetPassword, 
    getUserProfile,updatePassword, updateProfile, getAllUsers, getUserDetails, udptateUser, deleteUser } = require("../controllers/authController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router= express.Router();

router.route('/usuario/registro').post(registroUsuario)
router.route('/login').get(loginUser) //ruta para iniciar sesion, llama al metodo loginUser del controlador authController
router.route('/logout').get(isAuthenticatedUser, logOut) //ruta para cerrar sesion, llama al metodo logoutUser del controlador authController y le paso el metodo de cerrar sesión 
router.route('/forgotpassword').post(forgotPassword) //ruta para olvidar contraseña, llama al metodo forgotPassword del controlador authController
router.route('/resetpassword/:token').post(resetPassword) //ruta para resetear contraseña, llama al metodo resetPassword del controlador authController
router.route('/yo').get(isAuthenticatedUser,getUserProfile) //ruta para obtener el perfil del usuario, llama al metodo getUserProfile del controlador authController
router.route('/yo/updatePassword').put(isAuthenticatedUser,updatePassword) //ruta para actualizar la contraseña del usuario, llama al metodo updatePassword del controlador authController
router.route('/yo/updateProfile').put(isAuthenticatedUser,updateProfile) //ruta para actualizar el perfil del usuario, llama al metodo updateProfile del controlador authController

//rutas admin
router.route('/admin/allUsers').get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers) //ruta para obtener todos los usuarios, llama al metodo allUsers del controlador authController
router.route('/admin/user/:id').get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetails) //ruta para obtener un usuario, llama al metodo getUserDetails del controlador authController
router.route('/admin/updateUser/:id').put(isAuthenticatedUser, authorizeRoles("admin"), udptateUser) //ruta para actualizar un usuario, llama al metodo updateUser del controlador authController
router.route("/admin/deleteUser/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser)


module.exports= router 
//creamos la ruta, post es para crear, route es para crear una ruta, registerUser es el metodo que vamos a ejecutar

// {
    
        
//     "email":"prueba@gmail.com",
//     "password":"pruebas"

// } json prueba login usuario