//errores generales



module.exports = (err, req, res, next) => { //error, cuerpo del request, respuesta, next
    err.statusCode = err.statusCode || 500; //si no hay codigo de estado, entonces el codigo de estado es 500
    err.message = err.message || 'Internal Server Error'; //si no hay mensaje, entonces el mensaje es Internal Server Error

    res.status(err.statusCode).json({ //trazabilidad de errores
        success: false,
        message: err.stack //mensaje de error 
    }) //respondo con el codigo de estado y el mensaje
} //exporto una funcion que recibe 4 parametros