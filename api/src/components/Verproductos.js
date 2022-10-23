import React, { Fragment} from 'react'

const Verproductos = () => {
    const items = [
        {
            id: 1,
            nombre: 'Producto 1 curso html',
            precio: 100,
            descripcion: 'Descripcion del producto 1 curso',
            image: 'https://yourcodeweb.com/wp-content/uploads/2017/05/curso-html-2.png' 
        },
        {
            id: 2,
            nombre: 'Producto 2 curso css',
            precio: 200,
            descripcion: 'Descripcion del producto 2 curso',
            image: 'http://www.falconmasters.com/wp-content/uploads/2014/09/thumb-css.jpg'
        },
        {
            id: 3,
            nombre: 'Producto 3 curso js',
            precio: 300,
            descripcion: 'Descripcion del producto 3 curso',
            image: 'https://boluda.com/files/curso-javascript-300x157.png'
        }

    ]

    
    

  return (
    <Fragment>
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
    <div id='productos' className='productos'>
    </div>
    </Fragment>
  )
}

export default Verproductos