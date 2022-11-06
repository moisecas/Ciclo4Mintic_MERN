const Order = require ('../models/order');
const Product = require ('../models/productos');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');

//crear orden 
exports.newOrder =  catchAsyncErrors (async (req, res, next) => {
    
        const {
            Items,
            envioInfo,
            precioItems,
            precioImpuesto,
            precioEnvio,
            precioTotal,
            pagoInfo
        } = req.body; //en el body debe venir todo lo que necesitamos para crear la orden, en el front están los campos

        const order= await Order.create({
            Items,
            envioInfo,
            precioItems,
            precioImpuesto,
            precioEnvio,
            precioTotal,
            pagoInfo,
            fechaPago: Date.now(),
            user: req.user._id //el usuario que crea la orden es el que está logueado de la cookie
        })

        res.status(201).json({ //201 es que se creó correctamente
            success:true,
            order
        })


    
})

//Ver una orden
exports.getOneOrder= catchAsyncErrors(async(req, res, next)=>{
    //ver la order del usuario
    const order= await Order.findById(req.params.id).populate("user", "nombre email") //restriccion de usuario
    //populate es para traer los datos del usuario que creó la orden
    if(!order){
        return next(new ErrorHandler("No encontramos una orden con ese id",404)) //404 es que no se encontró
    }

    res.status(200).json({ //200 es que se encontró
        success:true,
        order
    })
})

//Ver todas mis ordenes (usuario logueado)
exports.myOrders= catchAsyncErrors(async(req,res, next)=>{ //ver las ordenes del usuario
    const orders= await Order.find({user: req.user._id}); //busca las ordenes del usuario logueado, recibe como parametro el id del usuario
    //asignar el valor de la orden a cada producto, filtrar por user
    res.status(200).json({
        success:true,
        orders //las ordenes del usuario
    })//rta 200 es que se encontró
})

//Admin
//Ver todas la ordenes (Administrador)
exports.allOrders= catchAsyncErrors(async (req, res, next)=>{
    const orders= await Order.find() //busca todas las ordenes

    let cantidadTotal= 0; //cantidad total de ordenes, es de tipo let para que se pueda modificar
    orders.forEach(order =>{ //uso forEach para recorrer el array de ordenes
        cantidadTotal= cantidadTotal + order.precioTotal //cantidad total de ordenes es igual a la cantidad total de ordenes + el precio total de la orden
       // cantidadTotal += order.precioTotal
    })

    res.status(200).json({
        success:true,
        cantidadTotal,
        orders
    })

})

//Editar una orden (admin) 
exports.updateOrder= catchAsyncErrors(async(req, res, next)=>{
    const order= await Order.findById(req.params.id)

    if(!order){
        return next (new ErrorHandler("Orden no encontrada", 404))
    }

    if (order.estado==="Enviado"){
        return next(new ErrorHandler("Esta orden ya fue enviada", 400))
    }

    order.estado= req.body.estado; //el estado de la orden es el que viene en el body
    order.fechaEnvio= Date.now(); //la fecha de envio es la fecha actual del servidor (Date.now)

    await order.save() //guarda la orden en la base de datos

    res.status(200).json({
        success:true,
        order
    })
})

async function updateStock(id, quantity){ //funcion para actualizar el stock
    const product = await Product.findById(id); //guardo en una const el producto que viene por id
    product.inventario= product.inventario-quantity; //el inventario del producto es igual al inventario del producto menos la cantidad que viene por parametro
    await product.save({validateBeforeSave: false})//validateBeforeSave: false para que no valide el stock, porque ya lo validamos en el front
}

//Eliminar una orden (admin)
exports.deleteOrder = catchAsyncErrors(async (req, res, next)=>{
    const order = await Order.findById(req.params.id); //busca la orden por id, recibe el id por parametro en la url (req.params.id)

    if(!order){
        return next (new ErrorHandler("Esa orden no esta registrada", 404))
    }
    await order.remove() //elimina la orden de la base de datos

    res.status(200).json({ //200 es que se encontró y se eliminó
        success:true,
        message:"Orden eliminada correctamente"
    })
})

    