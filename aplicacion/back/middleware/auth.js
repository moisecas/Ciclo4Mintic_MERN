const User = require("../models/auth");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler"); //respuesta en pantalla de los errores 
const catchAsyncErrors = require("../middleware/catchAsyncErrors"); ///atrapa errores asincronos 

//verificamos si estamos autenticados 


//captura errores, recibe 3 parametros, y retorna una promesa que resuelve una funcion que recibe 3 parametros, y retorna un catch que recibe next como parametro
exports.isAuthenticatedUser = catchAsyncErrors (async (req, res, next) => { //verificar si estamos autenticados requiere 3 parametros, y retorna una promesa que resuelve una funcion que recibe 3 parametros, y retorna un catch que recibe next como parametro
    const {token} = req.cookies; //creo const token req.cookies. viene del front, es un objeto que tiene un atributo token
    if (!token) { //si no hay token
        return next (new ErrorHandler ("Inicie sesión para acceder a esta ruta", 401)) //retorna un error
    }
     //si hay token
    const decodificada = jwt.verify(token, process.env.JWT_SECRET); //verifica el token, y lo decodifica
    req.user = await User.findById(decodificada.id); //busca el usuario por el id del token
    next(); //sigue con el siguiente middleware
    


})

//autorizacion de roles y permisos
exports.authorizeRoles = (...roles) => { //recibe un array de roles
    return (req, res, next) => { //retorna una funcion que recibe 3 parametros
        if (!roles.includes(req.user.role)) { //si el array de roles no incluye el rol del usuario
            return next (new ErrorHandler (`El rol ${req.user.role} no tiene acceso a este recurso`, 403)) //retorna un error
        }
        next(); //sigue con el siguiente middleware
    }
}



