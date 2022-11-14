import axios from "axios"

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAIL
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

//CARGAR EL USUARIO (LOAD USER)
export const loadUser=()=> async(dispatch) =>{
    try{
        dispatch({type: LOAD_USER_REQUEST}) //solicitando esta acción para que se cargue el usuario
        const {data} = await axios.get("/api/yo") //ruta del back
        dispatch({
            type: LOAD_USER_SUCCESS, //el estado de la carga del usuario
            payload: data.user //trae la data del usuario
        })
    }catch(error){
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}


//ACTUALIZAR USUARIO
export const updateProfile = (userData) => async (dispatch) => { //userdata es el objeto que contiene los datos del usuario
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST})

        const config={
            headers: {
                'Content-Type': 'multipart/form-data' //multipart/form-data es para enviar archivos
            }
        }
        const {data} = await axios.put('/api/yo/updateProfile', userData, config) //ruta del back

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data.user
        })
    }
    catch (error) { 
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message
        })
    }
}

//logout User
export const logout = () => async (dispatch)=>{
    try{ //si lo logro
        await axios.get("/api/logout")
        dispatch({ //lo que encuentre ahí despachará la acción
            type: LOGOUT_SUCCESS, //el estado de la carga del usuario
        })
    } catch(error){ //si no lo logro
        dispatch({
            type:LOGOUT_FAIL, //el estado de la carga del usuario
            payload: error.response.data.message //trae la data del usuario
        })
    }
}

//ACTUALIZAR CONTRASEÑA
export const updatePassword = (passwords) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PASSWORD_REQUEST})

        const config={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.put('/api/yo/updatePassword', passwords, config)

        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data.user
        })
    }
    catch (error) { 
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}


//Olvide contraseña (forgot password) recuperacion contraseña
export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST})

        const config={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('/api/forgotPassword', email, config)

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data.user
        })
    }
    catch (error) { 
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

//Reset Password, nueva contraseña
export const resetPassword = (token, passwords) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PASSWORD_REQUEST})

        const config={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post(`/api/resetPassword/${token}`, passwords, config)

        dispatch({
            type: NEW_PASSWORD_SUCCESS,
            payload: data.user
        })
    }
    catch (error) { 
        dispatch({
            type: NEW_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

//Clear error
export const clearErrors = () => async (dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}