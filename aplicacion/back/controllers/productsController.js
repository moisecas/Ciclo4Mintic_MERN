//acá va toda la funcionalidad crud lo que pasa con el schema de productos 

const producto = require('../models/productos'); //importamos el modelo de productos
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //importamos el fetch de node-fetch 

//ver lista de productos 
exports.getProducts = async (req, res, next) => { //trabaja con un requisito, una respuesta y un next, ejecute una acción al terminar
    
    const productos = await producto.find(); //buscamos todos los productos con el modelo de productos, devolución de la promesa
    //sabe que es una entidad y puedo interacturar con ella, producto es el modelo de productos, find es un método de mongoose, devuelve una promesa

    res.status(200).json({  //status 200 es que todo esta bien, json es un objeto, getmapping, convierte el objeto en json
        success: true,
        count: productos.length, //cuantos productos hay
        productos, //productos que encontramos
        message: 'Mostrar todos los productos'
    })//status 200 es que todo esta bien, json es que vamos a enviar un json
}


//consulta por id
exports.getProductById = async (req, res, next) => {
    const product = await producto.findById(req.params.id); //buscamos un producto por id, el req.params.id es el id que viene por la url, corresponde al producto que busco
    //debe llamarse product diferente al declarado al inicio, del req busque un parametro params que va por id. 
    //si existe o no
    if(!product){//si no existe el producto
        return res.status(404).json({ //res status 404 es que no se encontro el recurso, json es un objeto
            success: false, //no se encontro el producto
            message: 'Producto no encontrado' //mensaje de error al no encontrar el producto 
        }) //respondo con un status 404 que es que no se encontro el recurso, json es un objeto

    }
    res.status(200).json({
        success: true,
        message: 'Mostrar producto',
        product

    }) //res status 200 es que todo esta bien, json es un objeto

} //trabaja con un requisito, una respuesta y un next, ejecute una acción al terminar

//actualizar producto
exports.updateProduct = async (req, res, next) => { //async para que sea asincrono, req es el request, res es la respuesta, next es para que ejecute una acción al terminar
    let product = await producto.findById(req.params.id); //buscamos un producto por id, el req.params.id es el id que viene por la url, corresponde al producto que busco

    if(!product){//si no existe el producto
        return res.status(404).json({
            success: false,
            message: 'Producto no encontrado'

        }) //res status 404 es que no se encontro el recurso, json es un objeto
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
}


//eliminar producto
exports.deleteProduct = async (req, res, next) => { //async para que sea asincrono, req es el request, res es la respuesta, next es para que ejecute una acción al terminar
    const product = await producto.findById(req.params.id); //buscamos un producto por id, el req.params.id es el id que viene por la url, corresponde al producto que busco

    if(!product){//si no existe el producto
        return res.status(404).json({
            success: false,
            message: 'Producto no encontrado'

        }) //res status 404 es que no se encontro el recurso, json es un objeto
    }
    await product.remove(); //eliminamos el producto, remove() es un método de mongoose que elimina el producto
    res.status(200).json({
        success: true,
        message: 'Producto eliminado' //mensaje de producto eliminado
    }) //res status 200 es que todo esta bien, json es un objeto
}   


//crear nuevo producto => /api/v1/producto/nuevo
exports.newProduct = async (req, res, next) => { //req es el request, res es la respuesta, next es para que ejecute una acción al terminar
    const product = await producto.create(req.body); //el req que traemos del front, body es el cuerpo del request, creamos un producto con el modelo de productos, el req.body es lo que viene del front
    res.status(201).json({ //respondo con un status 201 que es que se creo un nuevo recurso, json es un objeto y con el producto que creamos
        success: true,
        product
    }) //status 201 es que se creo un nuevo recurso
} //trabaja con un requisito, una respuesta y un next, ejecute una acción al terminar
//promesa para crear un nuevo producto espero que se cree y luego lo muestro en la consola


//Metodo fetch 

//para traer los productos
function fetchProducts() {
    fetch('http://localhost:4000/api/productos') //fetch es una función de js, fetch('/api/productos') es la url que voy a consumir
    .then(res => res.json()) //promesa, convierte la respuesta en json, con esa info arme la respuesta
    .then(data => { //promesa, data es el json que viene de la respuesta
        console.log(data) //muestro en la consola el json que viene de la respuesta
    })
    .catch(err => console.log(err)) //promesa, si hay un error lo muestro en la consola 
}
//fetchProducts() //ejecuto la función fetchProducts para que me traiga los productos de la api

//para traer un producto por id
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
} 

verProductoPorID('6345d5f757cd66bbd7318dd5') //ejecuto la función fetchProduct para que me traiga el producto de la api