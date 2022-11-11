

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS
} from "../constants/userConstants"

export const authReducer = (state = { user: {} }, action) => {
    switch (action.type) {

        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST: //si el usuario se loguea correctamente
            return {
                loading: true,
                isAuthenticated: false
            }
        
        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS: 
            return {
                ...state, //trae el estado actual
                loading: false, //cambia el estado de loading a false para que no se quede cargando
                isAuthenticated: true,  //cambia el estado de isAuthenticated a true para que sepa que esta logueado
                user: action.payload //trae la data del usuario
            }
            
        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
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