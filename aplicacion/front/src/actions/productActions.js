import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
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