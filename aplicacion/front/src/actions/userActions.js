import axios from "axios"

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL
} from "../constants/userConstants"

//Login
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })//solicitando esta acción para que se loguee el usuario

        const config={
            headers: { //reviso el header que es a donde me llega la cookie 
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('/api/login', {email, password}, config) //de tipo get y según la ruta del back 
        //le paso el email y el password a la ruta del back
        dispatch({
            type:LOGIN_SUCCESS, //si lo logro
            payload: data.user //trae la data del usuario
        })
    }
    catch (error) {  //si no lo logro le paso el login fail
        dispatch({
            type:LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

//REGISTRAR USUARIO
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST })

        const config={
            headers: {
                'Content-Type': 'multipart/form-data' //multipart/form-data es para enviar archivos
            }
        }
        const {data} = await axios.post('/api/usuario/registro', userData, config)

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })
    }
    catch (error) { 
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

//Clear error, limpiador de errores 
export const clearErrors = () => async (dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}