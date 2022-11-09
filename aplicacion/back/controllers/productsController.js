//acá va toda la funcionalidad crud lo que pasa con el schema de productos 

const producto = require('../models/productos'); //importamos el modelo de productos
const ErrorHandler = require('../utils/errorHandler'); //importo el modulo de errores de express validator
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures"); //importo el modulo de paginacion
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //importamos el fetch de node-fetch 

//ver lista de productos 
exports.getProducts = catchAsyncErrors (async (req, res, next) => { //trabaja con un requisito, una respuesta y un next, ejecute una acción al terminar
    
    const resPerPage = 4; //cantidad de productos por pagina
    const productsCount = await producto.countDocuments(); //cuenta la cantidad de productos que hay en la base de datos, countDocuments es un metodo de mongoose

    const apiFeatures = new APIFeatures(producto.find(), req.query) //traigo apiFeatures, le paso el modelo de productos y el query
        .search() //busqueda de productos, se puede buscar por nombre, descripcion, precio, etc, search es un submetodo de apiFeatures
        .filter(); //filtro de categorias, se puede filtrar por categorias, filter es un submetodo de apiFeatures

    let products = await apiFeatures.query; //traigo los productos, apiFeatures.query es el query que se ejecuta
    let filteredProductsCount= products.length; //cantidad de productos filtrados, products.length es la cantidad de productos que hay en la base de datos
    apiFeatures.pagination(resPerPage); //paginacion de productos, le paso la cantidad de productos por pagina
    products = await apiFeatures.query.clone(); //traigo los productos, apiFeatures.query es el query que se ejecuta, .clone es para clonar el query gracias a mongoose

    res.status(200).json({ //retorna un json con los productos
        success: true,
        productsCount, //cantidad de productos
        resPerPage, //cantidad de productos por pagina
        filteredProductsCount, //cantidad de productos filtrados
        products //productos filtrados y paginados 
    })         

    //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client hay que eliminar una respuesta 200
    // const productos = await producto.find(); //buscamos todos los productos con el modelo de productos, devolución de la promesa
    // //sabe que es una entidad y puedo interacturar con ella, producto es el modelo de productos, find es un método de mongoose, devuelve una promesa

    // if (!productos){
    //     return next(new ErrorHandler("Informacion no encontrada", 404))
    // } //si no hay productos, respondo con un status 404 que es que no se encontro el recurso, json es un objeto

    // res.status(200).json({  //status 200 es que todo esta bien, json es un objeto, getmapping, convierte el objeto en json
    //     success: true,
    //     count: productos.length, //cuantos productos hay
    //     productos, //productos que encontramos
    //     message: 'Mostrar todos los productos'
    // })//status 200 es que todo esta bien, json es que vamos a enviar un json
})


//consulta por id, catchAsyncErrors es un middleware que captura los errores
exports.getProductById = catchAsyncErrors(async (req, res, next) => { //async para que sea asincrono, req es el request, res es la respuesta, next es para que ejecute una acción al terminar
    const product = await producto.findById(req.params.id); //buscamos el producto por id, req.params.id es el id que recibo por parametro

    if (!product){
        return next(new ErrorHandler('Producto no encontrado', 404)); //si no hay producto, retorno un error
    } //si no hay producto, respondo con un status 404 que es que no se encontro el recurso, json es un objeto

    res.status(200).json({ //status 200 es que todo esta bien, json es que vamos a enviar un json
        success: true,
        message: 'Mostrar producto por id',
        product //producto que encontramos
    }) //status 200 es que todo esta bien, json es que vamos a enviar un json
})


    //async para que sea asincrono, req es el request, res es la respuesta, next es para que ejecute una acción al terminar
 //trabaja con un requisito, una respuesta y un next, ejecute una acción al terminar

//actualizar producto
exports.updateProduct = catchAsyncErrors (async (req, res, next) => { //async para que sea asincrono, req es el request, res es la respuesta, next es para que ejecute una acción al terminar
    let product = await producto.findById(req.params.id); //buscamos un producto por id, el req.params.id es el id que viene por la url, corresponde al producto que busco

    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }

    product = await producto.findByIdAndUpdate(req.params.id, req.body, { //el metodo necesita el id, el body que viene del front, y un objeto con las opciones
        new: true, //devuelve el producto actualizado
        runValidators: true //corre las validaciones del modelo
    }) //actualizamos el producto, el req.params.id es el id que viene por la url, corresponde al producto que busco, el req.body es lo que viene del front, el {new: true, runValidators: true} es para que devuelva el producto actualizado y que corra las validaciones
    res.status(200).json({
        success: true,
        message: 'Producto actualizado',
        product  //producto actualizado 
    }) //res status 200 es que todo esta bien, json es un objeto
})


//eliminar producto
exports.deleteProduct = catchAsyncErrors (async (req, res, next) => { //async para que sea asincrono, req es el request, res es la respuesta, next es para que ejecute una acción al terminar
    const product = await producto.findById(req.params.id); //buscamos un producto por id, el req.params.id es el id que viene por la url, corresponde al producto que busco

    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    
    await product.remove(); //eliminamos el producto, remove() es un método de mongoose que elimina el producto
    res.status(200).json({
        success: true,
        message: 'Producto eliminado' //mensaje de producto eliminado
    }) //res status 200 es que todo esta bien, json es un objeto
})   


//crear nuevo producto => /api/v1/producto/nuevo
exports.newProduct =  catchAsyncErrors( async (req, res, next) => { //req es el request, res es la respuesta, next es para que ejecute una acción al terminar
    
    req.body.user = req.user.id; //el usuario que creo el producto es el usuario que esta logueado, req.user.id es el id del usuario que esta logueado

    const product = await producto.create(req.body); //el req que traemos del front, body es el cuerpo del request, creamos un producto con el modelo de productos, el req.body es lo que viene del front
    res.status(201).json({ //respondo con un status 201 que es que se creo un nuevo recurso, json es un objeto y con el producto que creamos
        success: true,
        product
    }) //status 201 es que se creo un nuevo recurso
}) //trabaja con un requisito, una respuesta y un next, ejecute una acción al terminar
//promesa para crear un nuevo producto espero que se cree y luego lo muestro en la consola


//crear un review 
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comentario, idProducto } = req.body; //desestructuro el req.body, rating, comentario y idProducto, esto viene del front

    const opinion = { //creo un objeto con los datos que necesito
        nombreCliente: req.user.nombre,
        rating: Number(rating),
        comentario
    }

    const product = await producto.findById(idProducto); //busco el producto por id, el idProducto es el id que viene del front

    const isReviewed = product.opiniones.find(item => //busco si el producto ya fue revieweado por el usuario que esta logueado
        item.nombreCliente === req.user.nombre) //actuaizar mi review,  traiga todas las opiniones y recorra cada una de ellas, si el nombre del cliente es igual al nombre del usuario que esta logueado, entonces ya fue revieweado, ya opine

    if (isReviewed) { //si ya fue revieweado, si es true
        product.opiniones.forEach(opinion => { //recorro las opiniones
            if (opinion.nombreCliente === req.user.nombre) { //si el nombre del cliente es igual al nombre del usuario que esta logueado
                opinion.comentario = comentario, //verifico si el comentario es igual al comentario que viene del front, actualizo el comentario
                    opinion.rating = rating //verifico si el rating es igual al rating que viene del front
            }
        })
    } else { //si no fue revieweado
        product.opiniones.push(opinion) //agrego la opinion al producto, uso el json que cree al inicio del metodo
        product.numCalificaciones = product.opiniones.length //actualizo el numero de calificaciones
    }
    //calcular el promedio de las calificaciones
    product.calificacion = product.opiniones.reduce((acc, opinion) =>  //recorrer las opiniones y sumarlas, acc es el acumulador, opinion es cada una de las opiniones
        opinion.rating + acc, 0) / product.opiniones.length //el rating de cada una de las opiniones mas el acumulador, dividido por el numero de opiniones
        //acc es el acumulador, opinion es cada una de las opiniones, el rating de cada una de las opiniones mas el acumulador, dividido por el numero de opiniones
    await product.save({ validateBeforeSave: false }); //guardo el producto, validateBeforeSave: false es para que no valide las validaciones del modelo

    res.status(200).json({ //respondo con un status 200 que es que todo esta bien, json es un objeto y con el producto que actualice
        success: true,
        message: "Hemos opinado correctamente"
    })

})

//Ver todas las review de un producto
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => { //exports para que sea publico, catchAsyncErrors para capturar errores,  async para que sea asincrono, req es el request, res es la respuesta, next es para que ejecute una acción al terminar
    const product = await producto.findById(req.query.id) //busco un producto por id, el req.query.id es el id que viene por la url, corresponde al producto que busco
    //req.query.id es el id que viene por la url, corresponde al producto que busco
    res.status(200).json({
        success: true,
        opiniones: product.opiniones
    })
})

//Eliminar review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.query.idProducto);

    const opi = product.opiniones.filter(opinion =>
        opinion._id.toString() !== req.query.idReview.toString());

    const numCalificaciones = opi.length;

    const calificacion = opi.reduce((acc, Opinion) =>
        Opinion.rating + acc, 0) / opi.length;

    await producto.findByIdAndUpdate(req.query.idProducto, {
        opi,
        calificacion,
        numCalificaciones
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        message: "review eliminada correctamente"
    })

    // const product = await producto.findById(req.query.idProducto); //busco un producto por id, el req.query.idProducto es el id que viene por la url, corresponde al producto que busco

    // const opiniones = product.opiniones.filter(opinion => //asigno a opiniones el producto que busco, filtro las opiniones, traigo todas las opiniones y recorro cada una de ellas, si el nombre del cliente es igual al nombre del usuario que esta logueado, entonces ya fue revieweado, ya opine
    //     opinion._id.toString() !== req.query.idReview.toString()); //si el id de la opinion es diferente al id de la review que viene por la url, entonces lo elimino
    //     //uso tostring porque el id es un objeto y no puedo comparar objetos con strings
    // const numCalificaciones = opiniones.length; //asigno a numCalificaciones el numero de opiniones
    // //calcular el promedio de las calificaciones es necesario volverlo a hacer 
    // const calificacion = product.opiniones.reduce((acc, Opinion) => //calculo el promedio de las calificaciones
    //     Opinion.rating + acc, 0) / opiniones.length; //el rating de cada una de las opiniones mas el acumulador, dividido por el numero de opiniones
    //     //Opinion.rating es el rating de cada una de las opiniones, acc es el acumulador, opiniones.length es el numero de opiniones
    // await producto.findByIdAndUpdate(req.query.idProducto, { //await para que espere a que se ejecute, actualizo el producto, busco el producto por id, el req.query.idProducto es el id que viene por la url, corresponde al producto que busco
    //     opiniones,
    //     calificacion,
    //     numCalificaciones
    // }, { //mandarlo para la base de datos actualizado 
    //     new: true,
    //     runValidators: true,
    //     useFindAndModify: false
    // })
    // res.status(200).json({ //la respuesta es un json con un mensaje de que se elimino correctamente
    //     success: true,
    //     message: "review eliminada correctamente"
    // })

})













//Metodo fetch 

// //para traer los productos
// function fetchProducts() {
//     fetch('http://localhost:4000/api/productos') //fetch es una función de js, fetch('/api/productos') es la url que voy a consumir
//     .then(res => res.json()) //promesa, convierte la respuesta en json, con esa info arme la respuesta
//     .then(data => { //promesa, data es el json que viene de la respuesta
//         console.log(data) //muestro en la consola el json que viene de la respuesta
//     })
//     .catch(err => console.log(err)) //promesa, si hay un error lo muestro en la consola 
// }
// //fetchProducts() //ejecuto la función fetchProducts para que me traiga los productos de la api

// //para traer un producto por id
// function verProductoPorID(id){
//     fetch('http://localhost:4000/api/producto/'+id)
//     .then(res=>res.json())
//     .then(res=>console.log(res))
//     .catch(err=>console.error(err))
// } 

// verProductoPorID('6345d5f757cd66bbd7318dd5') //ejecuto la función fetchProduct para que me traiga el producto de la api