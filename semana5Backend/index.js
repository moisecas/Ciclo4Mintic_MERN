const express = require ('express'); 
const app = express(); 
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json()); //voy a usar json

//ruta
app.get('/', (req, res) => { //req = request, res = response 
    res.send('Hola Mundo Tyson');
});

app.post('/', (req, res) => {
    const datoCliente ={};
    const {nombre, apellido,edad} = req.body;
    console.log(req.body);
   
    const nameservice = "Tyson";
    const passService = "1234";
    var respuesta = ""
    if (nombre == nameservice && apellido == passService){
        respuesta = "Bienvenido";
    }
    else{
        respuesta = "Usuario o contraseña incorrecta";
    }
    res.send(respuesta); //res = response

    
});

app.get('/:iva/:precio/:tipo', (req, res) => { //req = request, res = response')
    const {iva, precio, tipo} = req.params;
    var respuesta = iva * precio + tipo; 
    res.send(respuesta.toString()); //res = response tosString para convertirlo a string
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

