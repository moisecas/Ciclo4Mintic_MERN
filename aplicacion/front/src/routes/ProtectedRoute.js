import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loadUser } from "../actions/userActions";

const ProtectedRoute = ({children, isAdmin}) =>{ //pagina a donde puedo ir y mi condición de admin
    const {isAuthenticated=false, loading=true, user} = useSelector((state)=> state.auth) //admin es un booleano, nos comunicamos con el estado
    const dispatch=useDispatch();  //para ejecutar la acción de cargar el usuario

    useEffect(()=>{
        if(!user){
            dispatch(loadUser());
        }
    }, [isAuthenticated, loading]) //si el usuario no está autenticado o está cargando, ejecuta la acción de cargar el usuario

    if (loading) return <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>; //si está cargando, muestra el icono de carga

    if (loading===false && isAuthenticated){ //si no está cargando y está autenticado
        if (isAdmin===true & user.role!=="admin"){ //si es admin y el usuario no es admin
            return <Navigate to="/" />; //redirige a la página de inicio
        }
        return children; //retorna el componente hijo 
    }
    else{
        return <Navigate to={"/login"} />;
    }
}

export default ProtectedRoute;