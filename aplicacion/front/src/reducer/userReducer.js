import { //constantes que se importan de userConstants.js 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS
} from "../constants/userConstants"

export const authReducer = (state = { user: {} }, action) => { //state es el estado inicial, action es la accion que se va a realizar
    switch (action.type) { //me trae a un usuario con todos sus componentes y lo guarda en el estado
        //dependiendo de lo que ocurra haga una accion
        case LOGIN_REQUEST: //si el usuario se loguea correctamente
            return {
                loading: true, //cargando
                isAuthenticated: false //aún no estoy autenticado
            }
        case LOGIN_SUCCESS:
            return {
                ...state, 
                loading: false,
                isAuthenticated: true, //cambia a true porque ya estoy autenticado
                user: action.payload //me trae a un usuario con todos sus componentes y lo guarda en el estado
            }
        case LOGIN_FAIL:
            return { //si el usuario no se loguea correctamente
                ...state, //devuelve el estado anterior
                loading: false,
                isAuthenticated: false, //no estoy autenticado, falle
                user: null, //no hay usuario
                error: action.payload //me trae el error
            }
        case CLEAR_ERRORS:
            return { //limpiar errores para que no se queden en el estado
                ...state,
                error: null
            }

        default:
            return state
    }
}