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
    const orders= await Order.find()

    let cantidadTotal= 0;
    orders.forEach(order =>{
        cantidadTotal= cantidadTotal + order.precioTotal
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

    order.estado= req.body.estado;
    order.fechaEnvio= Date.now();

    await order.save()

    res.status(200).json({
        success:true,
        order
    })
})

async function updateStock(id, quantity){
    const product = await Product.findById(id);
    product.inventario= product.inventario-quantity;
    await product.save({validateBeforeSave: false})
}

//Eliminar una orden (admin)
exports.deleteOrder = catchAsyncErrors(async (req, res, next)=>{
    const order = await Order.findById(req.params.id);

    if(!order){
        return next (new ErrorHandler("Esa orden no esta registrada", 404))
    }
    await order.remove()

    res.status(200).json({
        success:true,
        message:"Orden eliminada correctamente"
    })
})

    