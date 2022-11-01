const User = require("../models/auth")
const ErrorHandler= require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors"); ///importamos el middleware de errores
const tokenEnviado = require("../utils/jwtToken");

//registrar un usuario => /api/usuario/registrar 

exports.registroUsuario = catchAsyncErrors (async (req, res, next) => { //registrar un usuario requiere 3 parametros, y retorna una promesa que resuelve una funcion que recibe 3 parametros, y retorna un catch que recibe next como parametro

    const {nombre, email, password} = req.body; //atributos obligatorios, las trae del body 

    const user = await User.create ({  //crea un usuario con los atributos del body
        nombre, 
        email, 
        password,
        avatar: {
            public_id: "avatar",
            url: "https://image.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg"
        }
    }) 

    tokenEnviado(user,201,res) //envia el token al navegador, recibe user, statusCode, res

}) 

//iniciar sesión
exports.loginUser = catchAsyncErrors (async (req, res, next) => { //iniciar sesion requiere 3 parametros, y retorna una promesa que resuelve una funcion que recibe 3 parametros, y retorna un catch que recibe next como parametro
    const {email, password} = req.body; //atributos obligatorios, las trae del body
    //verificar si el email y el password estan ingresados por el usuario
    if (!email || !password) { //si el email o el password no estan ingresados
        return next (new ErrorHandler ("Por favor ingrese email y contraseña", 400)) //retorna un error
    }
    //verificar si el usuario existe en la base de datos
    const user = await User.findOne ({email}).select ("+password") //busca un usuario por el email, y selecciona el password
    if(!user){ //si no existe el usuario
        return next (new ErrorHandler ("Usuario no encontrado", 401)) //retorna un error

    }

    //verificar si la contraseña es correcta
    const contrasenaOK= await user.compararPass(password);

    if (!contrasenaOK){
        return next(new ErrorHandler("Contraseña invalida" + 401))
    }
    
    //generar el token

    tokenEnviado(user, 200, res); //envia el token al navegador, recibe user, statusCode, res
})