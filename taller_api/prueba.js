import fetch from 'cross-fetch';

const respuesta = async (url) => {
    return await fetch(url)
    .then(response => response.json())
    .then(res =>{
        console.log(res) 
    })
}
respuesta('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0') //trae los primeros 10 pokemones