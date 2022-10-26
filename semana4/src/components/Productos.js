import React, { Fragment } from 'react'

const Productos = () => {

    const productosjson = [
        {
            "id": 1,
            "nombre": "Curso de React",
            "descripcion": "Curso de React",
            "precio": 100,
            "image":"https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
        },
        {
            "id": 2,
            "nombre": "Curso de Angular",
            "descripcion": "Curso de Angular",
            "precio": 200,
            "image":"https://mydigitalbo.com/cursos/uploads/curso_25_portada.jpg"
        }           
    ];

  return (
    <Fragment>
        <h1>Productos</h1>
        <div className="row">
            {productosjson.map((producto) => (
                <div className="col-md-4" key={producto.id}>
                    <div className="card">
                        <img src={producto.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">{producto.descripcion}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            ))} 
        </div>
    </Fragment>    
  )
}

export default Productos