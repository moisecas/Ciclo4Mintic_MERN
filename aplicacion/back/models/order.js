const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    envioInfo: {
        direccion: {
            type: String,
            required: true
        },
        ciudad: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        departamento: {
            type: String,
            required: true
        },

    },
    //relacion
    user:
    {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'auth' //referencia al modelo auth que es el que tiene el usuario

    },
    items:[{
        nombre: {
            type: String,
            required: true
        },
        cantidad: {
            type: Number,
            required: true
        },
        imagen: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        producto: {
            type: mongoose.Schema.ObjectId, //referencia al modelo producto
            required: true,
            ref: 'productos' //referencia al modelo productos
        }

        
    }],
    pagoInfo: {
        id: {
            type: String
        },
        estado: { //estado del pago
            type:String
        }
    },
    fechaPago:{
        type: Date
    },
    precioItems:{
        type:Number,
        required: true,
        default: 0.0
    },
    precioImpuesto:{
        type:Number,
        required: true,
        defautl: 0.0
    },
    precioEnvio:{
        type:Number,
        required: true,
        default: 0.0
    },
    precioTotal:{
        type:Number,
        required:true,
        default:0.0
    },
    estado:{ //estado de la orden
        type: String,
        required: true,
        default:"Pendiente"
    },
    fechaEnvio:{
        type:Date
    },
    fechaCreacion:{
        type:Date,
        default: Date.now
    }

})

module.exports = mongoose.model('order', orderSchema); //exportamos el modelo