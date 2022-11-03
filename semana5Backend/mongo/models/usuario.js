const mongoose = require("mongoose"); 

const usuarioSchema = new mongoose.Schema({
    //valores que voy a utilizar, definir como voy a pasar los datos
    nombre: String,
    password: String,
    rol: String,
    
});

module.exports = mongoose.model("usuarios", usuarioSchema); //exportar el modelo
//exportoto el modelo de donde voy a sacar los datos