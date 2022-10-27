module.exports= func => (req, res, next) =>  //atrapa errores 
    Promise.resolve(func(req, res, next)).catch(next);
//exporto una funcion que recibe una funcion como parametro, y retorna una funcion que recibe 3 parametros, y retorna una promesa que resuelve la funcion que recibe 3 parametros, y retorna un catch que recibe next como parametro


