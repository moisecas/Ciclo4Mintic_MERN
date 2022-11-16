import { ALL_PRODUCTS_REQUEST, 
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
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_RESET,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET,
} from "../constants/productConstants";

export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST: //puedo pasar las constantes si me sirve para mas de una accion
        case ADMIN_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }

        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                resPerPage: action.payload.resPerPage,
                filteredProductsCount: action.payload.filteredProductsCount
            }
        
        case ADMIN_PRODUCTS_SUCCESS: //siempre que se haga una peticion de productos, se va a actualizar el estado
            return {
                loading:false,
                products:action.payload
            }

        case ALL_PRODUCTS_FAIL:
        case ADMIN_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


//REDUCER PARA TENER TODOS LOS DETALLES
export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {

        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        case PRODUCT_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const newProductReducer = (state={ product:{} }, action )=>{ //va a generar un estado, productos llegan en json
    switch(action.type){ //creamos un switch para evaluar el tipo de accion que se va a realizar con los casos

        case NEW_PRODUCT_REQUEST:
            return{
                ...state, //neceista si o si un estado
                loading: true //cargando
            }

        case NEW_PRODUCT_SUCCESS:
            return {
                loading: false, //cargando
                success: action.payload.success, //si se creo el producto
                product: action.payload.product //el producto creado
            }

        case NEW_PRODUCT_FAIL:
            return{
                ...state, //neceista si o si un estado
                error:action.payload //el error que se genero
            }
            
        case NEW_PRODUCT_RESET:
            return{
                ...state,
                success:false //false por que no se creo el producto
            }
        case CLEAR_ERRORS://limpiar errores
            return {
                ...state,
                error:null
            }

        default:
            return state
    }
}
//eliminar producto 
export const productReducer= (state = {}, action)=>{
    switch(action.type){
        case DELETE_PRODUCT_REQUEST: //si se esta eliminando
        case UPDATE_PRODUCT_REQUEST: //si se esta actualizando
            return{
                ...state,  
                loading:true
            }
        case DELETE_PRODUCT_SUCCESS: //evento de exito en la eliminacion
            return{
                ...state,
                loading: false,
                isDeleted: action.payload //si se elimino
            }

        case UPDATE_PRODUCT_SUCCESS:
            return{
                ...state,
                loading: false, //cargando false por que ya se actualizo
                isUpdated: action.payload //me va a decir si se actualizo
            }
            
        case DELETE_PRODUCT_FAIL: //si hubo un error en la eliminacion
        case UPDATE_PRODUCT_FAIL:
            return{
                ...state,
                error: action.payload
            }
            
        case UPDATE_PRODUCT_RESET:
            return{
                ...state, 
                isUpdated: false //false por que no se actualizo
            }
        case CLEAR_ERRORS:
            return {
                error:null
            }
        default://si no se cumple ninguna de las anteriores
            return state
    }
}