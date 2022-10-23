import React from 'react'

const Carrito = () => {

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
    <div className='Carrito'>
        <h1>Carrito</h1>
        

    
    </div>
  )
}

export default Carrito