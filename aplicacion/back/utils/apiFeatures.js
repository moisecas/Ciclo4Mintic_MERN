//paginacion y filtros en el back
class APIFeatures{ //constructor de la clase
    constructor(query, queryStr){ //query es la consulta que se va a realizar, queryStr es la consulta que se va a realizar
    this.query=query; //query es la consulta que se va a realizar, la que me llega por parametro, navegador
    this.queryStr=queryStr //queryStr es la consulta que se va a realizar, la que me llega por parametro, navegador
}

search(){ //busqueda de productos
    const keyword= this.queryStr.keyword ? { //si viene keyword, entonces, si existe keyword, entonces
        nombre:{ //nombre del producto
            $regex:this.queryStr.keyword, //regex es para buscar por palabras, keyword es la palabra que se va a buscar
            $options:'i' //i es para que no sea sensible a mayusculas y minusculas
        }
    }:{} //si no viene keyword, entonces, si no existe keyword, entonces, no se hace nada

    this.query= this.query.find({...keyword}); //busca el producto por nombre ...keyword es el nombre del producto
    return this //retorna la consulta 
}

filter(){ //filtros
    const queryCopy = { ...this.queryStr}; //queryCopy es una copia de la consulta que se va a realizar, queryStr es la consulta que se va a realizar, navegador

    //eliminemos los campos que vienen de otras consultas
    const removeFields= ["keyword", "limit", "page"] //campos que no quiero que se filtren, keyword es la palabra que se va a buscar, limit es la cantidad de resultados por pagina, page es la pagina actual
    removeFields.forEach(el => delete queryCopy[el]) //recorra cada elemento de removeFields, elimine el elemento de queryCopy, el es cada elemento de removeFields

    //Filtro avanzado para precio
    let queryStr= JSON.stringify(queryCopy) //queryStr es la consulta que se va a realizar, queryCopy es una copia de la consulta que se va a realizar, navegador
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => //reemplace los campos que vienen de otras consultas
    `$${match}`) //match es cada elemento de removeFields

    this.query= this.query.find(JSON.parse(queryStr)) //busca el producto por nombre ...keyword es el nombre del producto
    return this //retorna la consulta
}

pagination(resPerPage){ //resPerPage es la cantidad de resultados por pagina
    //Number es para convertir a numero
    const currentPage = Number(this.queryStr.page) || 1; //numero de pagina actual, si no viene nada, por defecto es 1
    const skip = resPerPage * (currentPage-1); //cuantos resultados quiero saltar, es la cantidad de resultados por pagina * la pagina actual -1
    //skip es para saltar resultados
    this.query= this.query.limit(resPerPage).skip(skip)  //this query es la consulta que se va a realizar, limit es para limitar la cantidad de resultados, skip es para saltar resultados
    return this //retorna la consulta
}

}

module.exports = APIFeatures