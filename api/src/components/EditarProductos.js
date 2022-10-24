import React, { Fragment} from 'react'

const EditarProductos = () => {
    const items = [       

    ]

    function editarItems() {
        
        var id = document.getElementById('id').value;
        var nombre = document.getElementById('nombre').value;
        var descripcion = document.createElement('descripcion').value;
        var precio = document.createElement('precio').value;
        var image = document.createElement('image').value;
        items.push({id: id, nombre: nombre, descripcion: descripcion, precio: precio, image: image});
        console.log(items);
        

    } 
    function agregarElementos(){
        var lista = document.getElementById('foo');
        items.forEach(function(data){
            var li = document.createElement('li');
            li.innerHTML = data.id + ' ' + data.nombre + ' ' + data.descripcion + ' ' + data.precio + ' ' + data.image;
            lista.appendChild(li);
        })

       
    } 
    

    
   
    
    

  return (
    <Fragment>
    
    <h1>Crear productos</h1>
    <div id='productos' className='productos'>
        <label>id</label>
        <input type='number'  id='id' />
        <label>nombre</label>
        <input type='text'  id='nombre' />
        <label>precio</label>
        <input type='number'  id='precio' />
        <label>descripcion</label>
        <input type='text'  id='descripcion' />
        <label>imagen</label>
        <input type='text'  id='imagen' />
        <input type='submit' onClick={editarItems} />
        <button onClick={agregarElementos}>Mostrar</button> 
        
        
    </div>
    <ul id='foo'></ul>
    
            
    
    </Fragment>
  )
}

export default EditarProductos