import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS,
    LOAD_USER_REQUEST,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_RESET,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAIL
} from "../constants/userConstants"

//Cambios y reducer sobre procesos de autenticacion
export const authReducer = (state = { user: {} }, action) => {
    switch (action.type) {

        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }

        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }

        case LOGOUT_SUCCESS: //si el usuario se desloguea correctamente
            return{
                loading:false, //no esta cargando
                isAuthenticated:false, //no esta autenticado
                user:null //no hay usuario
            }

        case LOGOUT_FAIL:
            return{
                ...state, //retorna el estado actual
                error: action.payload //retorna el error
            }

        case LOAD_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
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

//Actualizar usuario, actualizar contraseña, usuario que supero el login
export const userReducer = ( state = {}, action) =>{
    switch (action.type){ //cada uno de sus cambios es una acción diferente que se ejecuta en el reducer
        case UPDATE_PROFILE_REQUEST:
        case UPDATE_PASSWORD_REQUEST:
            return {
                ...state,
                loading:true
            }
    
        case UPDATE_PROFILE_SUCCESS:
        case UPDATE_PASSWORD_SUCCESS:
            return{
                ...state, //retorna el estado actual
                loading:false, //no carga porque ya alguien se logueo 
                isUpdated: action.payload 
            }
        
        case UPDATE_PROFILE_RESET: //si el usuario se desloguea correctamente
        case UPDATE_PASSWORD_RESET:
            return{
                ...state,
                isUpdated: false //no esta cargando porque ya alguien se logueo
            }
        
        case UPDATE_PROFILE_FAIL:
        case UPDATE_PASSWORD_FAIL:
            return{
                ...state,
                loading:false, //no me carga nada y puede enviarme un error
                error: action.payload //retorna el error
            }
        case CLEAR_ERRORS:
            return{ //limpieza de errores
                ...state,
                error:null
            }
        
        default:
            return state //retorna el estado actual
        
    }
}

export const forgotPasswordReducer = (state={}, action)=>{
    switch(action.type){
        
        case FORGOT_PASSWORD_REQUEST:
        case NEW_PASSWORD_REQUEST:
            return{
                ...state,
                loading: true,
                error:null
            }
        
        case FORGOT_PASSWORD_SUCCESS:
            return{
                ...state,
                loading:false,
                message: action.payload
            }
        
        case NEW_PASSWORD_SUCCESS:
            return{
                ...state,
                success: action.payload
            }
        
        case FORGOT_PASSWORD_FAIL:
        case NEW_PASSWORD_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        default:
            return state;
    }
}

