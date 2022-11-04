const express=require("express");
const router=express.Router();
const { newOrder, 
    getOneOrder, 
    myOrders, 
    allOrders,
    updateOrder,
    deleteOrder
} = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth"); //importamos el middleware de autenticacion

router.route("/order/new").post( isAuthenticatedUser,newOrder) //ruta para crear una orden, llama al metodo newOrder del controlador orderController
router.route("/order/:id").get(isAuthenticatedUser, getOneOrder) //recibe el id del usuario
router.route("/orders/me").get(isAuthenticatedUser, myOrders) //ruta para obtener las ordenes del usuario, llama al metodo myOrders del controlador orderController


//rutas de admin
router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), allOrders) //ruta para obtener todas las ordenes, llama al metodo allOrders del controlador orderController
router.route("/admin/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder) //ruta para actualizar una orden, llama al metodo updateOrder del controlador orderController
router.route("/admin/order/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder) //ruta para eliminar una orden, llama al metodo deleteOrder del controlador orderController


module.exports=router;