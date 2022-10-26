import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from "../layout/MetaData"
import { useParams } from 'react-router-dom'
import { getProductDetails} from '../../actions/productActions'
//import { useAlert} from 'react-alert'
import { Carousel } from 'react-bootstrap'


export const ProductDetails = () => {
   const {loading, product, error} = useSelector(state =>state.productDetails)
   const {id} =useParams();
   const dispatch= useDispatch();
   //const alert= useAlert();
   const [quantity, setQuantity] = useState(1) //variable de estado para la cantidad de productos


   useEffect(() => {
    dispatch(getProductDetails(id))
    // if (error){
    //   alert.error(error);
    //   dispatch(clearErrors())
    // }

   }, [dispatch, alert, error, id])

   const increaseQty = () => { //funcion para aumentar la cantidad de productos
      const contador = document.querySelector('.count') //seleccionamos el elemento con la clase count, me permita subir y bajar el numero de productos

      if (contador.valueAsNumber>=product.inventario) return; //si el valor del contador es mayor o igual al inventario, no se puede seguir aumentando

      const qty = contador.valueAsNumber+1; //si no, se aumenta en 1
      setQuantity(qty) //se actualiza el estado de la cantidad, asignamos el valor 
   }

   const decreaseQty = () => { //funcion para disminuir la cantidad de productos
    const contador = document.querySelector('.count')

    if (contador.valueAsNumber <= 1) return; //si el valor del contador es menor o igual a 1, no se puede seguir disminuyendo
    const qty = contador.valueAsNumber-1; //si no, se disminuye en 1
    setQuantity(qty) //se actualiza el estado de la cantidad, asignamos el valor
 }

  return (
   <Fragment>
    {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
      <Fragment>
      <MetaData title={product.nombre}></MetaData> {/*Aqui se pone el titulo de la pagina desde el arreglo*/}
      <div className='row d-flex justify-content-around'>
          <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
              <Carousel pause='hover'>
                {product.imagen && product.imagen.map(img =>(  //recorremos el arreglo de imagenes que esta dentro del json de la db del producto 
                  <Carousel.Item key={img.public_id}> {/*Aqui se pone la imagen del arreglo*/} 
                    <img className="d-block w-100" src={"../"+img.url} alt={product.nombre}></img> {/*Aqui se pone la imagen del arreglo*/}
                  </Carousel.Item>
                ))}
              </Carousel>
          </div>

          <div className='col-12 col-lg-5 mt-5'>
              <h3>{product.nombre}</h3>
              <p id="product_id">ID del Producto {product._id}</p>
              <hr />

              <div className='rating-outer'>
                <div className="rating-inner" style={{width: `${(product.calificacion/5)*100}%`}}></div> {/* recorro array y traigo aquí la calificacion del producto*/}
              </div>
              <span id="No_de_reviews">  ({product.numCalificaciones} Reviews)</span>
              <hr />
              <p id="precio_producto">${product.precio}</p> {/*Aqui se pone el precio del producto*/}
              <div className="stockCounter d-inline"> {/*clase stockCounter Aqui se pone el contador de cantidad*/} 
                <span className="btn btn-danger minus" onClick={decreaseQty}>-</span> {/*simbolo - del carrito, función disminuir*/}
                <input type="number" className="form-control count d-inline" value={quantity} readOnly/> {/*Aqui se pone el contador de cantidad de productos que va al carrito, el input vacio*/}
                <span className="btn btn-primary plus" onClick={increaseQty}>+</span> {/*simbolo + del carrito función aumentar*/}
              </div>
              <button type="button" id="carrito_btn" className="btn btn-primary d-inline ml-4" disabled={product.inventario===0}>Agregar al Carrito</button> {/*cuando sea 0 inhabilitelo*/}
              <hr />
              <p>Estado: <span id="stock_stado" className={product.inventario>0 ? 'greenColor':'redColor'}>{product.inventario>0 ? "En existencia": "Agotado"}</span></p> {/*si es mayor que 0 será en existencia verde si no agotado rojo*/}
              <hr />
              <h4 className="mt-2">Descripción:</h4> {/*Aqui se pone la descripcion del producto ocupa dos espacios mt-2*/}
              <p>{product.descripcion}</p> {/*Aqui se pone la descripcion del producto que viene del array que mapeo*/}
              <hr />
              <p id="vendedor">Vendido por: <strong>{product.vendedor}</strong></p>
              <button id="btn_review" type="button" className="btn btn-primary mt-4" 
              data-toggle="modal" data-target="#ratingModal">Dejar opinión</button> {/*ventana emergente con estilo*/}
              <div className="alert alert-danger mt-5" type="alert">Debes iniciar sesión para dejar un review</div> 
          
              {/*Mensaje emergente opinion y calificacion, clases con espacio y ubicación deseada*/}
              <div className="row mt-2 mb-5">
                <div className="rating w-50">
                  <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog"
                  aria-labelledby='ratingModalLabel' aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="ratingModalLabel">Enviar Review</h5>
                          <button type="button" className='close' data-dismiss="modal" aria-label='Close'>
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">{/*area para los comentarios*/}
                          <ul className="stars">
                            <li className="star"><i className="fa fa-star"></i></li>
                            <li className="star"><i className="fa fa-star"></i></li>
                            <li className="star"><i className="fa fa-star"></i></li>
                            <li className="star"><i className="fa fa-star"></i></li>
                            <li className="star"><i className="fa fa-star"></i></li>
                          </ul>

                          <textarea name="review" id="review" className="form-control mt3"></textarea>

                          <button className="btn my-3 float-right review-btn px-4 text-white" 
                          data-dismiss="modal" aria-label="Close">Enviar</button>
                        
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
          </div>
      </div>
  </Fragment>
    )}
   </Fragment>
    
  )
}