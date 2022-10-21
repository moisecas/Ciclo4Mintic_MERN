import React, { Fragment,useEffect } from 'react'
import MetaData from './layout/MetaData'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import { Link } from 'react-router-dom' //para poder usar el link de react router dom link es para poder hacer un link a otra pagina
//import { useAlert } from 'react-alert'

const Home = () => {

    const { loading, productos } = useSelector(state => state.products) //trae los valores de los estados que estan en el front
   
    //const alert = useAlert()  //lo inicializo 


    const dispatch = useDispatch()
    useEffect(() => { //useEffect es un hook de react que se ejecuta cuando el componente se monta
        //si hay error finaliza la ejecucion y muestra el error
        // if(error){
        //     return alert.error(error) //muestra el error
        // }
        dispatch(getProducts()) //ejecutar la accion de obtener productos
        //alert.success('Ok. Listo') //mostrar alerta de que todo salio bien
    }, [dispatch]) //ver como un arregle el dispatch es un parametro que se pasa a la funcion

  return (
    <Fragment>
    {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : ( //si esta cargando muestra el mensaje loading si no muestra el fragment de abajo 
        <Fragment>
        <MetaData title="Skins para personalizar" ></MetaData>
        <h1 id='encabezado_productos text-center'>Últimos productos</h1> 
        <section id="productos" className='container mt-5'>
                <div className='row'>
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
            </Fragment>
    )}
    



    </Fragment>
  )
}

export default Home 