import { ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS
} from "../constants/productConstants";

export const productReducer = (state = { products: [] }, action) => { //productos de mi base de datos que vienen en un diccionario
    switch (action.type) { //accion a ejecutar dependiendo del tipo de accion, posible accion a ejecutarse
        case ALL_PRODUCTS_REQUEST:
            return { //retornar el estado actual, me regrese el estado actual
                loading: true,
                productos: [] //paquete de productos vacio, apenas se inicia la peticion, si algo ocurre se va a llenar
            }
        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                productos: action.payload.productos, //paquete de productos lleno, si la peticion es exitosa se va a llenar
                count: action.payload.count //cantidad de productos
               
            }
        case ALL_PRODUCTS_FAIL:
            return { //mensaje que me diga que paso con la peticion
                loading: false,
                error: action.payload //mensaje de error
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state; //retornar el estado actual, estado por defecto
    }
}