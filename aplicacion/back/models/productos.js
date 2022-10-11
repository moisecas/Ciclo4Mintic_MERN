//modelo schema de productos con sus propiedades y sus validaciones 

const mongoose = require('mongoose'); //importamos mongoose

const productosSchema = new mongoose.Schema({
    nombre: { //declaracion de atributos 
        type: String, //tipo de dato
        required: [true, 'Por favor ingrese el nombre del producto'], //requerido, mensaje de error
        trim: true, //quita espacios en blanco al inicio y al final del string 
        maxlength: [120, 'El nombre del producto no puede tener mas de 120 caracteres'] //longitud maxima, mensaje de error

    },
    precio: {
        type: Number,
        required: [true, 'Por favor ingrese el precio del producto'],
        maxlength: [9, 'El precio del producto no puede tener mas de 9 caracteres'], //se deben separar por comas 
        default: 0.0 //valor por defecto, eliminar la posibilidad del error de que no se ingrese un precio
    },
    descripcion: {
        type: String,
        required: [true, 'Por favor ingrese la descripcion del producto'],
           
    },
    calificacion: {
        type: Number,
        default: 0.0 //valor por defecto, eliminar la posibilidad del error de que no se ingrese una calificacion

    },
    imagen: [ //array de varias imagenes 
        {
            public_id: { //id de la imagen
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true

            } //url de la imagen
        }
    ],
    categoria: {
        type: String,
        required: [true, 'Por favor ingrese la categoria del producto'],
        enum: {
            values: [
                "Skin ps4",
                "Skin ps5",
                "Skin xbox one",
                "Skin xbox one s",
                "Skin xbox series x",
                "Skin xbox series s",
                "Skin ps3",
                "Skin xbox 360 slim",
                "Skin xbox 360 super slim",
            ],
        } //enum es para que solo se puedan ingresar los valores que se encuentran en el array
    },
    vendedor: {
        type: String,
        required: [true, 'Por favor ingrese el vendedor del producto']
    }

    

})//creamos el schema, es la estructura de la base de datos