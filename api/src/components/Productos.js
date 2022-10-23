import React from 'react'



const Productos = () => {
    function mostrarProductosHTML(){
        let nombre = document.getElementById('nombre').value
        let precio = document.getElementById('precio').value
        let descripcion = document.getElementById('descripcion').value
        let image = document.getElementById('image').value
        let html = `
        <div className="card" style="width: 18rem;">
            <img src="${image}" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">${nombre}</h5>
                <p className="card-text">${descripcion}</p>
                <a href="#" className="btn btn-primary">${precio}</a>
            </div>
        </div>
        `
        document.getElementById('productos').innerHTML = html
    }
    mostrarProductosHTML()

  return (
    <div  className='app' >
        <h1>Agregar Productos</h1>
        <form>
            <label>Nombre</label>
            <input id='nombre' type='text' name='nombre' placeholder='Nombre del producto' />
            <label>Precio</label>
            <input  id='precio' type='number' name='precio' placeholder='Precio del producto' />
            <label>Descripcion</label>
            <input id='descripcion' type='text' name='descripcion' placeholder='Descripcion del producto' />
            <label>Imagen</label>
            <input  id='image' type='text' name='image' placeholder='Imagen del producto' />
            <input type='submit' value='Agregar' onClick={mostrarProductosHTML}/>
        </form>

        <h1>Productos</h1>
        <div id='productos' className='productos'>
        </div>

    </div>
  )
}

export default Productos 