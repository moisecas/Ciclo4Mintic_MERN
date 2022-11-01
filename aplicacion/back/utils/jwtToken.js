//involucrar las cookies

// //crear y enviar un token guardado en una cookie 
// const tokenEnviado= (user, statusCode, res) => {
//     //crear el token 
//     const token= user.getJwtToken(); //creamos el token, a la constante user le paso el metodo getJwtToken
//     //opciones de cookie
//     const Opciones= { //opciones de la cookie
//         expires: new Date( //de esta forma lo entiende el navegador 
//             Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000 //tiempo de expiracion de la cookie, valor numerico, en milisegundos
//         ),
//         httpOnly: true //no se puede acceder a la cookie desde el navegador
//     }
//     res.status(statusCode).cookie("token", token, Opciones).json({ //enviamos la cookie al navegador, con el token, y las opciones
//         success: true,
//         token,
//         user
//     })//json 
// }

// module.exports= tokenEnviado; 

//Crear y enviar un token guarado en una cookie
const tokenEnviado= (user, statusCode, res) =>{

    //Creamos el token
    const token = user.getJwtToken();

    //Opciones del token
    const Opciones= {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME*24*60*60*1000
        ),
        httpOnly: true
    }

    res.status(statusCode).cookie("token", token, Opciones).json({ //enviamos la cookie al navegador, con el token, y las opciones
        success:true,
        token,
        user
    })
}

module.exports= tokenEnviado; // exportamos el token enviado para poder usarlo en otros archivos 