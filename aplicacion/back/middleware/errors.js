//errores generales



module.exports = (err, req, res, next) => { //error, cuerpo del request, respuesta, next
    err.statusCode = err.statusCode || 500; //si no hay codigo de estado, entonces el codigo de estado es 500
    err.message = err.message || 'Internal Server Error'; //si no hay mensaje, entonces el mensaje es Internal Server Error

    res.status(err.statusCode).json({ //trazabilidad de errores
        success: false,
        message: err.stack //mensaje de error 
    }) //respondo con el codigo de estado y el mensaje

    //error clave duplicada 
    if(err.code===11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        error = new ErrorHandler(message,400); //400 es bad request
    }

    //manejo de errores de validacion
    if(err.name==='JsonWebTokenError'){
        const message = 'Json Web Token is invalid. Try Again!!!';
        error = new ErrorHandler(message,400);

    }

    //token expirado
    if(err.name==='TokenExpiredError'){ //si el error es de token expirado
        const message = 'Json Web Token is expired. Try Again!!!';
        error = new ErrorHandler(message,400);
    }
    

} //exporto una funcion que recibe 4 parametros