//schema usuario 
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); //herramienta para generar tokens

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Por favor ingrese su nombre'],
        maxlength: [300, 'Su nombre no puede tener mas de 300 caracteres']
    },
    email: {
        type: String,
        required: [true, 'Por favor ingrese su email'],
        unique: true, //no puede haber dos usuarios con el mismo email
        validate: [validator.isEmail, 'Por favor ingrese un email valido'] //valida que el email sea valido
    },
    password: {
        type: String,
        required: [true, 'Por favor ingrese su contraseña'],
        minlength: [6, 'Su contraseña debe tener al menos 6 caracteres'],
        select: false //no se va a mostrar en la respuesta, queda oculta
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: { 
        type: String,
        default: 'user' //por defecto el rol es user
        
    },
    fechaRegistro: {
        type: Date,
        default: Date.now //por defecto la fecha de registro es la fecha actual
    },
    resetPasswordToken: String, //token para resetear la contraseña
    resetPasswordExpire: Date //fecha de expiracion del token

    


});

usuarioSchema.pre('save', async function (next) { //metodo para el modelo de usuario, antes de guardar el usuario, se ejecuta una funcion que recibe next como parametro
      if (!this.isModified('password')) { //si el password no ha sido modificado, no se va a encriptar, valida el password
          next()
      }      
        this.password = await bcrypt.hash(this.password, 10); //encripta el password, valor que se va a encriptar, numero de vueltas que se le va a dar al algoritmo de encriptacion
}) //antes de guardar el usuario, ejecuta una funcion


//return jwt token
usuarioSchema.methods.getJwtToken = function () { //metodo para generar el token, llamamos a methods porque es un metodo del modelo
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { //recibe un id para identificar el usuario, retorna la herramienta jwt, recurso sing, genera el token, recibe el id del usuario, la palabra secreta, y el tiempo de expiracion del token
        expiresIn: process.env.JWT_EXPIRES_TIME  //Tiempo de expiracion del token
    })
}

//compare user password
usuarioSchema.methods.compararPass = async function (passDada){
    return await bcrypt.compare(passDada, this.password)
} //bcrypt.compare compara el password ingresado con el password encriptado, compare es un metodo de bcrypt

module.exports = mongoose.model("auth", usuarioSchema); //exporto el modelo



