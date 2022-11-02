const User = require("../models/auth")
const ErrorHandler= require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors"); ///importamos el middleware de errores
const tokenEnviado = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto")

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

//Cerrar sesión
exports.logOut = catchAsyncErrors (async (req, res, next) => { //cerrar sesion requiere 3 parametros, y retorna una promesa que resuelve una funcion que recibe 3 parametros, y retorna un catch que recibe next como parametro
    res.cookie("token", null, { //envia un cookie al navegador, con el nombre token, con valor null, y con las siguientes opciones
        expires: new Date(Date.now()), //la fecha de expiracion es la fecha actual, expire ya mismo
        httpOnly: true //solo se puede acceder por http
    })
    res.status(200).json({ //envia un json con el status 200, y con el mensaje
        success: true,
        message: "Cerraste sesión"
    }) 
})

//olvide mi contraseña,recuperar contraseña
exports.forgotPassword = catchAsyncErrors (async (req, res, next) => {
    //olvide la contraseña
    const user = await User.findOne({email: req.body.email}) //busca un usuario por el email, y selecciona el password, esta en el req body
    if (!user){ //si no existe el usuario
        return next (new ErrorHandler ("Usuario no encontrado", 404)) //retorna un error
    }
    //generar el token
    const resetToken= user.genResetPasswordToken(); //genera un token de reseteo de contraseña
    
    await user.save({validateBeforeSave: false}) //guarda el usuario con el token de reseteo de contraseña, y no valida los campos

    //crear una url para hacer el reseteo de la contraseña
    const resetUrl= `${req.protocol}://${req.get("host")}/api/resetPassword/${resetToken}`; //crea una url con el protocolo, el host, y el reset token
    //enviar el correo con la url, capture el protocolo, host que tenemos, y ruta reset token

    const message = `Su contraseña ha sido reseteada. Haga click en 
    el siguiente link: \n\n ${resetUrl} \n\n Si no ha solicitado este cambio, ignore este correo.` //crea un mensaje con la url
    
    //enviarla por correo
    try {
        await sendEmail({ //envia un email con el email del usuario, el asunto, y el mensaje
            email: user.email,
            subject: "Password recovery",
            message
        })
        res.status(200).json({ //envia un json con el status 200, y con el mensaje
            success: true,
            message: `Email enviado a: ${user.email}`
        })
    }
    catch (error) {
        user.resetPasswordToken = undefined; //si hay un error, el token de reseteo de contraseña es undefined
        user.resetPasswordExpire = undefined; //si hay un error, el token de reseteo de contraseña expira undefined

        await user.save({validateBeforeSave: false}) //guarda el usuario con el token de reseteo de contraseña, y no valida los campos

        return next (new ErrorHandler (error.message, 500)) //retorna un error
    }
}) //olvide mi contraseña requiere 3 parametros, y retorna una promesa que resuelve una funcion que recibe 3 parametros, y retorna un catch que recibe next como parametro

//resetear contraseña
exports.resetPassword= catchAsyncErrors (async (req, res, next) => { //recibe 3 parametros, y retorna una promesa que resuelve una funcion que recibe 3 parametros, y retorna un catch que recibe next como parametro
    //hash el token que viene en la url
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex"); //crea un hash con el token que viene en la url para compararlo con el token de la base de datos
    //buscamos al usuario por el token
    const user = await User.findOne({ //busca un usuario por el token de reseteo de contraseña, y por la fecha de expiracion del token
        resetPasswordToken,
        resetPasswordExpire: {$gt: Date.now()} //verificando si la fecha de expiracion del token es mayor a la fecha actual
    })
    //validar si el usuario existe
    if(!user){ //si no existe el usuario
        return next (new ErrorHandler ("Token invalido o expirado", 400)) //retorna un error
    }
    //coinciden las contraseñas, contraseña y su confirmación son iguales
    if(req.body.password !== req.body.confirmPassword){ //si la contraseña no es igual a la confirmacion de la contraseña, pass del front vs confirm pass del front
        return next (new ErrorHandler ("Contraseña no coincide", 400)) //retorna un error
    }
    //setear la nueva contraseña
    user.password = req.body.password; //la contraseña del usuario es la contraseña que viene en el req body
    user.resetPasswordToken = undefined; //el token de reseteo de contraseña es undefined
    user.resetPasswordExpire = undefined; //el token de reseteo de contraseña expira undefined

    await user.save(); //guarda el usuario con el token de reseteo de contraseña, y no valida los campos
    tokenEnviado(user, 200, res); //envia el token al navegador, recibe user, statusCode, res

}) //resetear contraseña requiere 3 parametros, y retorna una promesa que resuelve una funcion que recibe 3 parametros, y retorna un catch que recibe next como parametro