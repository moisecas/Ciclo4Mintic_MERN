const User = require("../models/auth")
const ErrorHandler= require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors") ///importamos el middleware de errores

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

    res.status (201).json ({ 
        success: true,  //nos devuelve un json con el usuario creado
        user //usuario creado, devuelve el id, el nombre, el email, el avatar, el rol, la fecha de registro, usuario creado
    }) 

}) 