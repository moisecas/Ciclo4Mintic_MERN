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
        
    </div>
    <div className='products'>
        {items && items.map(item => (
            <div className="card" style={{width: '18rem'}} key={item.id} id='idItem' >
                <img src={item.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.descripcion}</p>
                    <a href="#" className="btn btn-primary">{item.precio}</a>
                    <input type='submit' value='Agregar'  />
                </div>
            </div>
        

            
        ))}
    </div>
            
    
    </Fragment>
  )
}

export default EditarProductos