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

    const { loading, products, resPerPage, productsCount } = useSelector(state => state.products) //desde el actions se trae estas variables 
   
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
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                <Fragment>
                    <MetaData title="Skins personalizados"></MetaData>
                    <h1 id="encabezado_productos">Ultimos Productos</h1>

                    <section id="productos" className='container mt-5'>
                        <div className='row'>
                            <Slider
                                range
                                className='t-slider'
                                marks={{
                                    100: `$100`,
                                    1000000: `$1000000`
                                }}
                                min={100}
                                max={1000000}
                                defaultValue={[100, 1000000]}
                                tipFormatter={value => `$${value}`}
                                tipProps={{
                                    placement: 'top',
                                    prefixCls: 'rc-slider-tooltip',
                                    visible: true
                                }}
                                value={precio}
                                onChange={precio => setPrecio(precio)}
                            ></Slider>

                            {products && products.map(producto => (
                                <div key={producto._id} className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                    <div className='card p-3 rounded'>
                                        <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}></img>
                                        <div className='card-body d-flex flex-column'>
                                            <h5 id="titulo_producto"><Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>
                                            <div className='rating mt-auto'>
                                                <div className='rating-outer'>
                                                    <div className='rating-inner' style={{ width: `${(producto.calificacion / 5) * 100}%` }}></div>
                                                </div>
                                                <span id="No_de_opiniones"> {producto.numCalificaciones} Reviews</span>
                                            </div>
                                            <p className='card-text'>${producto.precio}</p><Link to={`/producto/${producto._id}`} id="view_btn" className='btn btn-block'>
                                                Ver detalle
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </section>

                    <div className='d-flex justify-content-center mt-5'>
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={resPerPage}
                            totalItemsCount={productsCount}
                            onChange={setCurrentPageNo}
                            nextPageText={'Siguiente'}
                            prevPageText={'Anterior'}
                            firstPageText={'Primera'}
                            lastPageText={'Ultima'}
                            itemClass='page-item'
                            linkClass='page-link'
                        />
                    </div>

                </Fragment>

            )}


        </Fragment>
    )
}

export default Home 



