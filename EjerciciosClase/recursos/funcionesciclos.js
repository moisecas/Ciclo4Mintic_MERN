function mostrarEdad(){
    var anioNacimiento = document.getElementById('anionacimiento').value;
    const anioActual = 2022;

    for(let index = anioNacimiento; index <= anioActual; index++){
        document.getElementById('respuesta').innerHTML += "su edad en el año "+index+" es: "+(index-anioNacimiento)+"<br>";
    }

    
}