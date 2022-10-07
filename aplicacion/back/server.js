//lo vamos a usar para arrancar el servidor 

const app=require('./app');
const connectDB=require('./config/database');

//setear el archivo de configuracion
const dotenv=require('dotenv'); 
dotenv.config({path:'back/config/config.env'}); //cargamos el archivo de configuracion, path ruta del archivo 
//para que encuentre los archivos de configuracion 

//conectar a la base de datos
connectDB(); //llamamos a la funcion de conexion a la base de datos

//declaran metodos en js, llamamos al server
const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})

