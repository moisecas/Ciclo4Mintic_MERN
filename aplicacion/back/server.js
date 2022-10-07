//lo vamos a usar para arrancar el servidor 

const app=require('./app');

//setear el archivo de configuracion
const dotenv=require('dotenv'); 
dotenv.config({path:'back/config/config.env'}); //cargamos el archivo de configuracion, path ruta del archivo 
//para que encuentre los archivos de configuracion 

//declaran metodos en js, llamamos al server
const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})

