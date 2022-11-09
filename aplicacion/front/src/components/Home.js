import React, { Fragment,useEffect, useState } from 'react'
import MetaData from './layout/MetaData'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useParams, Link } from 'react-router-dom' //para poder usar el link de react router dom link es para poder hacer un link a otra pagina
//import Product from './products/Product'
//import { useAlert } from 'react-alert'
import Pagination from 'react-js-pagination' //para poder usar la paginacion
import Slider from 'rc-slider' //rc slider es un componente de react para hacer sliders
import 'rc-slider/assets/index.css' //para poder usar el css de rc slider, para usar sus clases 



const Home = () => {
    const params = useParams() //para poder usar el link de react router dom link es para poder hacer un link a otra pagina
    const keyword = params.keyword 
    const [precio, setPrecio] = useState([1000,1000000]) //para poder usar el slider de precio, entre 1000 y 1000000

    const [currentPage, setCurrentPage] = useState(1) //para poder usar la paginacion y saber en que pagina estoy, declarar variable y se crea su metodo set, puedo cambiar el estado, le doy valor por defecto 1

    const { loading, productos, resPerPage, productsCount } = useSelector(state => state.products) //desde el actions se trae estas variables 
   
    //const alert = useAlert()  //lo inicializo 

    


    const dispatch = useDispatch() //las ajusta en el dispatch para poder usarlas en el useEffect, para que en el html podamos contar con esas variables
    useEffect(() => { //useEffect es un hook de react que se ejecuta cuando el componente se monta
        //si hay error finaliza la ejecucion y muestra el error
        // if(error){
        //     return alert.error(error) //muestra el error
        // }
        dispatch(getProducts(currentPage), keyword, precio) //ejecutar la accion de obtener productos
        //alert.success('Ok. Listo') //mostrar alerta de que todo salio bien
    }, [dispatch, currentPage, keyword, precio]) //ver como un arregle el dispatch es un parametro que se pasa a la funcion

    function setCurrentPageNo(pageNumber){ //pagination asume y le pase un numero
        setCurrentPage(pageNumber) //traigo el state de la pagina actual y le asigno el numero de pagina que estoy
    } //funcion para cambiar de pagina, usa el seter del useState

  return (
    <Fragment>
    {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : ( //si esta cargando muestra el mensaje loading si no muestra el fragment de abajo 
        <Fragment>
        <MetaData title="Skins para personalcaizar" ></MetaData>
        <h1 id='encabezado_productos text-center'>Últimos productos</h1> 
        <section id="productos" className='container mt-5'>
                <div className='row'>
                <Slider //slider de precio
                                range //para que sea un rango
                                className='t-slider' //clase slider
                                marks={{ //marks es para ponerle los valores al slider, arranca en 1000 y termina en 1000000
                                    100: `$100`,
                                    1000000: `$1000000`
                                }}
                                min={100} //valor minimo
                                max={1000000} //valor maximo
                                defaultValue={[100, 1000000]} //valor por defecto
                                tipFormatter={value => `$${value}`}
                                tipProps={{ //para que el tooltip se vea bien en el slider
                                    placement: 'top', //posicion
                                    prefixCls: 'rc-slider-tooltip', //accion a los clicks del slider
                                    visible: true   //visible 
                                }}
                                value={precio}
                                onChange={precio => setPrecio(precio)} //cuando se mueve el slider se ejecuta la funcion setPrecio
                            ></Slider>
                    {productos && productos.map (producto => ( //traemos del objeto productos la data si productos existe, mapear los productos y retornarlos
                        <div key={producto._id} className='col-sm-12 col-md-6 col-lg-3 my-3'> {/*_id es el id de mongo, si encuentra 8 ids crea 8 cards y así*/}
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}></img> {/*mapendo o recorriendo el arreglo de imagen para asignarla al html y mostrar / imagen es un arreglo de objetos, url es la url de la imagen y public_id es el id de la imagen*/}
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner' style={{width: `${(producto.calificacion/5)*100}%`}}></div> {/*calificacion es un numero de 1 a 5, se multiplica por 100 para obtener el porcentaje, la clase por si sola sabe cuantas estrellas eliminar o dejar*/}
                                    </div>
                                    <span id="No_de_opiniones"> {producto.numCalificaciones} Reviews</span> {/*numCalificaciones es el numero de calificaciones que tiene el producto*/}
                                </div>
                                <p className='card-text'>${producto.precio}</p><Link to={`/producto/${producto._id}`} id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </Link> {/*precio es el precio del producto, va hasta la ruta y trae el dato*/}
                            </div>
                        </div> 
                    </div>

                    ))}
                    </div>
            </section>

            <div className='d-flex justify-content-center mt-5'> {/*para poder usar la paginacion*/}
            <Pagination
                        activePage={currentPage} //pagina actual
                        itemsCountPerPage={resPerPage} //resultados por pagina
                        totalItemsCount={productsCount} //total de productos
                        onChange={setCurrentPageNo} //funcion para cambiar de pagina
                        nextPageText={'Siguiente'} //texto de la pagina siguiente
                        prevPageText={'Anterior'} //texto de la pagina anterior
                        firstPageText={'Primera'} //texto de la primera pagina
                        lastPageText={'Ultima'} //texto de la ultima pagina
                        itemClass='page-item' // clase de la pagina viene de bootstrap
                        linkClass='page-link'// clase del link, cuando se hace click en la pagina viene de bootstrap
                        />
            </div>

            </Fragment>
    )}
    



    </Fragment>
  )
}

export default Home 



