
//constantes para unir acciones con reducers y asi poder actualizar el estado
export const LOGIN_REQUEST = "LOGIN_REQUEST" //solicita que se loguee el usuario
export const LOGIN_SUCCESS= "LOGIN_SUCCESS" //si el usuario se loguea correctamente
export const LOGIN_FAIL= "LOGIN_FAIL" //si el usuario no se loguea correctamente


export const REGISTER_USER_REQUEST="REGISTER_USER_REQUEST"
export const REGISTER_USER_SUCCESS="REGISTER_USER_SUCCESS"
export const REGISTER_USER_FAIL="REGISTER_USER_FAIL"

export const LOAD_USER_REQUEST="LOAD_USER_REQUEST"
export const LOAD_USER_SUCCESS="LOAD_USER_SUCCESS"
export const LOAD_USER_FAIL="LOAD_USER_FAIL"

export const LOGOUT_SUCCESS="LOGOUT_SUCCESS"
export const LOGOUT_FAIL="LOGOUT_FAIL" //si el usuario no se desloguea correctamente, se llama al reducer

export const UPDATE_PROFILE_REQUEST= "UPDATE_PROFILE_REQUEST"
export const UPDATE_PROFILE_SUCCESS= "UPDATE_PROFILE_SUCCESS"
export const UPDATE_PROFILE_FAIL= "UPDATE_PROFILE_FAIL"
export const UPDATE_PROFILE_RESET= "UPDATE_PROFILE_RESET"

export const UPDATE_PASSWORD_REQUEST= "UPDATE_PASSWORD_REQUEST"
export const UPDATE_PASSWORD_SUCCESS= "UPDATE_PASSWORD_SUCCESS"
export const UPDATE_PASSWORD_FAIL= "UPDATE_PASSWORD_FAIL"
export const UPDATE_PASSWORD_RESET= "UPDATE_PASSWORD_RESET"

export const FORGOT_PASSWORD_REQUEST= "FORGOT_PASSWORD_REQUEST" //solicita que se recupere la contraseña
export const FORGOT_PASSWORD_SUCCESS= "FORGOT_PASSWORD_SUCCESS"
export const FORGOT_PASSWORD_FAIL= "FORGOT_PASSWORD_FAIL"

export const NEW_PASSWORD_REQUEST= "FORGOT_PASSWORD_REQUEST" //nueva contraseña
export const NEW_PASSWORD_SUCCESS= "NEW_PASSWORD_SUCCESS" //si se actualiza la contraseña
export const NEW_PASSWORD_FAIL= "NEW_PASSWORD_FAIL" //si no se actualiza la contraseña

//export const USER_UPDATE_REQUEST="USER_UPDATE_REQUEST"
//export const USER_UPDATE_SUCCESS="USER_UPDATE_SUCCESS"
//export const USER_UPDATE_FAIL="USER_UPDATE_FAIL"

export const CLEAR_ERRORS="CLEAR_ERRORS" //limpiar errores para que no se queden en el estado 