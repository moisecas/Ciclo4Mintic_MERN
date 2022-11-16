import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

//import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getProductDetails, updateProduct } from '../../actions/productActions'
import { UPDATE_PRODUCT_RESET } from '../../constants/productConstants'
import { useNavigate, useParams } from 'react-router-dom'

export const UpdateProduct = () => {
    const navigate= useNavigate()
    const params= useParams(); //obtenemos el id del producto a actualizar
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [inventario, setInventario] = useState(0);
    const [vendedor, setVendedor] = useState('');
    const [imagen, setImagen] = useState([]);
    const [imagenPreview, setImagenPreview] = useState([])
    const [oldImagen, setOldImagen] = useState([])

    const categorias = [
        "Skin ps4",
        "Skin ps5",
        "Skin xbox one",
        "Skin xbox one s",
        "Skin xbox series x",
        "Skin xbox series s",
        "Skin ps3",
        "Skin xbox 360 slim",
        "Skin xbox 360 super slim"
    ]

    //const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, isUpdated, error: updateError} = useSelector (state => state.product) //obtenemos el estado del producto a actualizar que viene del store de redux product
    const { error, product} = useSelector ( state => state.productDetails) //obtenemos el estado del producto a actualizar que viene del store de redux productDetails
    const productId= params.id;

    useEffect(() => {
        if (product && product._id !==productId){ //si el producto existe y su id es diferente al id del producto a actualizar
            dispatch(getProductDetails(productId)); //obtenemos los detalles del producto a actualizar, pide el id que tomamos de los parametros
        }else{ //llena los campos del formulario con los datos del producto a actualizar
            setNombre(product.nombre);
            setPrecio(product.precio);
            setDescripcion(product.descripcion);
            setCategoria(product.categoria);
            setVendedor(product.vendedor);
            setInventario(product.inventario);
            setOldImagen(product.imagen)
        }
        if(error){
            alert(error)
            dispatch(clearErrors)
        }
        if (updateError){ //
            alert(error)
            dispatch(clearErrors)
        }
        if(isUpdated){//si el producto se actualizo correctamente
            alert("Producto actualizado correctamente");
            navigate("/dashboard")
            dispatch({ type: UPDATE_PRODUCT_RESET}) //despacho de tipo UPDATE_PRODUCT_RESET para que se limpie el estado de isUpdated
        }

    }, [dispatch, error, isUpdated, updateError, product, productId]) //toda la informacion involucrada en el useEffect

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('nombre', nombre);
        formData.set('precio', precio);
        formData.set('descripcion', descripcion);
        formData.set('categoria', categoria);
        formData.set('inventario', inventario);
        formData.set('vendedor', vendedor);

        imagen.forEach(img => {
            formData.append('imagen', img)
        })

        dispatch(updateProduct(product._id, formData))
    }

    const onChange = e => { //funcion para cargar las imagenes cambia las imagenes que se muestran en el preview

        const files = Array.from(e.target.files)

        setImagenPreview([]);
        setImagen([])
        setOldImagen([]) //anterior arreglo de imagenes 

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagenPreview(oldArray => [...oldArray, reader.result])
                    setImagen(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }

  return (
    <Fragment>
    <MetaData title={'Actualizar producto'} />
    <div className="row">
        <div className="col-12 col-md-2">
            <Sidebar />
        </div>

        <div className="col-12 col-md-10">
            <Fragment>
                <div className="wrapper my-5">
                    <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                        <h1 className="mb-4">Actualizar Producto</h1>

                        <div className="form-group">
                            <label htmlFor="name_field">Nombre</label>
                            <input
                                type="text"
                                id="name_field"
                                className="form-control"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price_field">Precio</label>
                            <input
                                type="text"
                                id="price_field"
                                className="form-control"
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description_field">Descripcion</label>
                            <textarea className="form-control" 
                            id="description_field" 
                            rows="8" 
                            value={descripcion} 
                            onChange={(e) => setDescripcion(e.target.value)}></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="category_field">Categoria</label>
                            <select className="form-control" 
                            id="category_field" 
                            value={categoria} 
                            onChange={(e) => setCategoria(e.target.value)}>
                                {categorias.map(categoria => (
                                    <option key={categoria} value={categoria} >{categoria}</option>
                                ))}

                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="stock_field">Inventario</label>
                            <input
                                type="number"
                                id="stock_field"
                                className="form-control"
                                value={inventario}
                                onChange={(e) => setInventario(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="seller_field">Vendedor</label>
                            <input
                                type="text"
                                id="seller_field"
                                className="form-control"
                                value={vendedor}
                                onChange={(e) => setVendedor(e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label>Imágenes</label>

                            <div className='custom-file'>
                                <input
                                    type='file'
                                    name='product_images'
                                    className='custom-file-input'
                                    id='customFile'
                                    onChange={onChange}
                                    multiple
                                />
                                <label className='custom-file-label' htmlFor='customFile'>
                                    Seleccione Imágenes
                         </label>
                            </div>

                            {oldImagen && oldImagen.map(img => (
                                <img key={img} src={img.url} alt={img.url} className="mt-3 mr-2" width="55" height="52" />
                            ))}

                            {imagenPreview.map(img => (
                                <img src={img} key={img} alt="Vista Previa" className="mt-3 mr-2" width="55" height="52" />
                            ))}

                        </div>


                        <button
                            id="login_button"
                            type="submit"
                            className="btn btn-block py-3"
                            disabled={loading ? true : false}
                        >
                            ACTUALIZAR
                    </button>

                    </form>
                </div>
            </Fragment>
        </div>
    </div>

</Fragment>
  )
}