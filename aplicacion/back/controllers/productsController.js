exports.getProducts = (req, res, next) => { //trabaja con un requisito, una respuesta y un next, ejecute una acción al terminar
    res.status(200).json({  //status 200 es que todo esta bien, json es un objeto, getmapping 
        success: true,
        message: 'Mostrar todos los productos'
    })//status 200 es que todo esta bien, json es que vamos a enviar un json
}