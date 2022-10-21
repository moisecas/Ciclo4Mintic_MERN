//funciones asincronas trabajando con callbacks al tiempo

const bajaVideo = (url) => {
    console.log(`baja video de .... ${url}`);
    setTimeout(() => {
        console.log(`termino de bajar video de .... ${url}`);
    }, 3000); // 3 segundos para bajar el video de la url que se pasa como parametro 

};

const procesaVideo = (url) => {
    console.log(`procesa video de .... ${url}`);
};

let url = "https://www.youtube.com/watch?v=1q2w3e4r5t6";

bajaVideo(url, procesaVideo); // procesa el video despues de que termine de bajar el video


//promesas 
let aprobarcurso = false;

const apruebaCurso = new Promise((resolve, reject) => { //resolve es cuando se cumple la promesa y reject es cuando no se cumple la promesa
    if (aprobarcurso) {
        const diploma = {
            nombre: "Juan",
            curso: "JavaScript"
        };
        resolve(diploma); //se cumple la promesa y se resuelve con el diploma
    } else {
        reject("reprobado");
    }
});

//handle promise
const promesacumplida = (resolvedValue) => {
    console.log(`promesa cumplida con el valor ${resolvedValue.nombre} y el curso ${resolvedValue.curso}`);
}

const promesaFallada = (rejectValue) => {
    console.log(`promesa fallada con el valor ${rejectValue}`);
}

//ejecutando la promesa
apruebaCurso.then(promesacumplida).catch(promesaFallada); //then es cuando se cumple la promesa y catch es cuando no se cumple la promesa


//otra forma de ejecutar la promesa
const verpromise = () => { //funcion anonima sin parametros
    apruebaCurso.then(promesacumplida).catch(promesaFallada); //then es cuando se cumple la promesa y catch es cuando no se cumple la promesa
}
verpromise(); //ejecutando la funcion anonima sin parametros que contiene la promesa

//promesa de tipo array
//promoise.all, array de promesas y retorna una sola 
//se usa cuando el orden de las promesas no importa

let aprobacion = false; //variable para cambiar el estado de la promesa

const chequearaprobacion = (aprobacion) => {
    return new Promise((resolve, reject) => {
        if (aprobacion) {
            resolve("aprobado");
        } else {
            reject("reprobado");
        }
    });
};

const chequeacalificacion = (calificacion) => {
    return new Promise((resolve, reject) => {
        if (calificacion >= 70) {
            resolve("aprobado");
        } else {
            reject("reprobado");
        }
    });
};

const estadoDiplomado = chequearaprobacion(true);
const aprobeciclos = chequeacalificacion(60);

const promesas = [estadoDiplomado, aprobeciclos]; //retorna el resultado de las promesas en un array


Promise.all(promesas).then((values) => {
    console.log(values);
}).catch((error) => {
    console.log(error); //si una de las promesas falla se ejecuta el catch
})

