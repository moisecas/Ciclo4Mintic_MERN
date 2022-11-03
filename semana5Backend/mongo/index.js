var mongoose = require("mongoose");
var esquemaUsuarios = require("./models/usuario");
var esquemaProductos = require("./models/producto");


mongoose.connect("mongodb://localhost:27017/sem", //direccion de la base de datos y nombre de la base de datos
{    //requiere unos parametros
    useNewUrlParser: true,
     useUnifiedTopology: true

    });

//Insertar datos
esquemaUsuarios.create({user:"camilo", pass:"1234", rol:"admin"}, function(err){
    if (err) throw err; //si hay un error
    console.error(err); 
})

//busqueda
esquemaUsuarios.find(function (err, esquemaUsuarios){ //busca todos los datos de la base de datos
    if (err) return console.error(err);
    console.log(esquemaUsuarios); //imprime los datos de la base de datos en consola 
}) 


//busqueda especifica 
esquemaUsuarios.find({ rol:"admin"}, function(err, esquemaUsuarios){
    if (err) return console.error(err);
    console.log(esquemaUsuarios);
})


//actualizar
esquemaUsuarios.updateOne({rol:"admin"}, {rol:"user"}, function(err){ //busca el rol admin y lo cambia a user
    if (err) return console.error(err);
    console.log(esquemaUsuarios);
})

//Productos
console.log("Productos");

//Insertar datos
esquemaProductos.create({nombre:"Skin xbox series s", vendedor:"camilo", inventario: 10, precio: 10000, descripcion: "Skin para xbox series s", image: "https://i.imgur.com/8Q5ZQ0M.jpg"}, function(err){
    if (err) throw err; //si hay un error
    console.error(err); 
})