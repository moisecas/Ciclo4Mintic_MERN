//schema usuario 
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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

module.exports = mongoose.model('auth', usuarioSchema); //exporto el modelo


