const producto = require('../models/productos'); //importamos el modelo de productos


//ver lista de productos 
exports.getProducts = (req, res, next) => { //trabaja con un requisito, una respuesta y un next, ejecute una acción al terminar
    res.status(200).json({  //status 200 es que todo esta bien, json es un objeto, getmapping 
        success: true,
        message: 'Mostrar todos los productos'
    })//status 200 es que todo esta bien, json es que vamos a enviar un json
}

//acá va toda la funcionalidad crud lo que pasa con el schema de productos 

//crear nuevo producto => /api/v1/producto/nuevo
exports.newProduct = async (req, res, next) => { //req es el request, res es la respuesta, next es para que ejecute una acción al terminar
    const product = await producto.create(req.body); //el req que traemos del front, body es el cuerpo del request, creamos un producto con el modelo de productos, el req.body es lo que viene del front
    res.status(201).json({ //respondo con un status 201 que es que se creo un nuevo recurso, json es un objeto y con el producto que creamos
        success: true,
        product
    }) //status 201 es que se creo un nuevo recurso
} //trabaja con un requisito, una respuesta y un next, ejecute una acción al terminar
//promesa para crear un nuevo producto espero que se cree y luego lo muestro en la consola
