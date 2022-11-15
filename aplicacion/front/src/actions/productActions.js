import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS, 
    ADMIN_PRODUCTS_REQUEST,
    ADMIN_PRODUCTS_SUCCESS,
    ADMIN_PRODUCTS_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL
} from '../constants/productConstants';

export const getProducts = (currentPage =1, keyword='') => async(dispatch)=>{ //currentPage es la pagina actual, keyword es la palabra que se busca
    try {
        dispatch({type: ALL_PRODUCTS_REQUEST})

        const {data} = await axios.get(`/api/productos?keyword=${keyword}&page=${currentPage}`) //palabra clave y luego la paginación
        //debo traer la paginacion, link para que se aplique esa paginacion




        dispatch({
            type:ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch (error){
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
//admin products
export const getAdminProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCTS_REQUEST }) //en caso de que todo salga bien, se va a ejecutar el dispatch

        const { data } = await axios.get('/api/admin/productos') //la informacion que se va a traer

        dispatch({ //se va a ejecutar el dispatch que contiene el type y el payload, para que llegue al front
            type: ADMIN_PRODUCTS_SUCCESS, //el type es el que se va a ejecutar, all products success es el que se va a ejecutar
            payload: data.products //el payload es la informacion que se va a traer que es data.products
        })
    } catch (error) {
        dispatch({ //todo estado debe tener un despacho de accion
            type: ADMIN_PRODUCTS_FAIL, //en caso de que falle, se va a ejecutar el dispatch que contiene el type y el payload
            payload: error.response.data.message //el payload es el mensaje de error
        })
    }
}
//NUEVO PRODUCTO -ADMIN
export const newProduct = ( productData ) => async (dispatch)=>{
    try {
        dispatch({type: NEW_PRODUCT_REQUEST})

        const config ={ 
            header: { 
                'Content-Type':'application/json'
            }
        }

        const {data} = await axios.post('/api/producto/nuevo', productData, config)

        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

//VER DETALLE DEL PRODUCTO
export const getProductDetails = (id) => async(dispatch)=>{
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/producto/${id}`)

        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })
    }catch (error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}



// Clear errors
export const clearErrors = () => async (dispatch) => { //funcion asincrona que recibe dispatch como parametro
    dispatch({
        type: CLEAR_ERRORS
    })
}; //limpiar errores