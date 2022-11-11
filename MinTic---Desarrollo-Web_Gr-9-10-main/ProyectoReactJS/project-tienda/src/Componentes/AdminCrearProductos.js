import { Fragment } from "react";
import { useState } from "react";

import '../Estilos/Login.css';


export function CrearProdcutos() {

    const [data, setDate] = useState({//coincide con la data del modelo de la base de datos
        id:"",
        nombre:"",
        stock:"",
        descripcion:"",
        valor:"",
        imagen:""



    }
    )
    function crearProductosNuevos(){
        const datosJSON = JSON.stringify(data);
        fetch("http://localhost:5000/GuardarProducto",{ //fetch es una funcion que permite hacer peticiones a un servidor
            method:"POST",
            body:datosJSON,
            headers:{ //defino el tipo de contenido que voy a enviar
                "Content-Type":"application/json"
            }
        })
        alert("Producto creado con exito")
    }


    return (

        <Fragment>
            <div className="container">

                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Crear Producto</h3>
                                <div className="form-group">
                                    <label htmlFor="id">Id</label>
                                    <input type="text" className="form-control" id="id" placeholder="Id" onChange={(e) => setDate({ ...data, id: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" placeholder="Nombre" onChange={(e) => setDate({ ...data, nombre: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stock">Stock</label>
                                    <input type="text" className="form-control" id="stock" placeholder="Stock" onChange={(e) => setDate({ ...data, stock: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descripcion">Descripcion</label>
                                    <input type="text" className="form-control" id="descripcion" placeholder="Descripcion" onChange={(e) => setDate({ ...data, descripcion: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="valor">Valor</label>
                                    <input type="text" className="form-control" id="valor" placeholder="Valor" onChange={(e) => setDate({ ...data, valor: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="imagen">Imagen</label>
                                    <input type="text" className="form-control" id="imagen" placeholder="Imagen" onChange={(e) => setDate({ ...data, imagen: e.target.value })} />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={crearProductosNuevos}>Crear Producto</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>


    );

    
}
