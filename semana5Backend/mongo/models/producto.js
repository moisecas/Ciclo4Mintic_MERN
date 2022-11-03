const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
    //valores que voy a utilizar, definir como voy a pasar los datos
    vendedor: String,
    nombre: String,
    inventario: Number,
    precio: Number,
    descripcion: String,
    image: String, 
});

module.exports = mongoose.model("productos", productoSchema); //exportar el modelo