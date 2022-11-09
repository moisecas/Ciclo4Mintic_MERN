
//constantes para unir acciones con reducers y asi poder actualizar el estado
export const LOGIN_REQUEST = "LOGIN_REQUEST" //solicita que se loguee el usuario
export const LOGIN_SUCCESS= "LOGIN_SUCCESS" //si el usuario se loguea correctamente
export const LOGIN_FAIL= "LOGIN_FAIL" //si el usuario no se loguea correctamente


//export const USER_UPDATE_REQUEST="USER_UPDATE_REQUEST"
//export const USER_UPDATE_SUCCESS="USER_UPDATE_SUCCESS"
//export const USER_UPDATE_FAIL="USER_UPDATE_FAIL"

export const CLEAR_ERRORS="CLEAR_ERRORS" //limpiar errores para que no se queden en el estado 