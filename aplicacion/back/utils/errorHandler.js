//manejador de errores 

class ErrorHandler extends Error { //extiende una libreria de javascript llamada Error 
  constructor(statusCode, message) { //constructor de errores , metodo me genere un mensaje de error
    super(message); //super es una palabra reservada de javascript que me permite llamar al constructor de la clase padre
    this.statusCode = statusCode; //el codigo de estado de mi error es igual al codigo de estado que recibo por parametro
    Error.captureStackTrace(this, this.constructor); //esto es para que no se muestre en el stack trace, captuure la pila de errores
  
    }
}


module.exports = ErrorHandler; //exporto el modulo