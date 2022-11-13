import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux'
//import { useAlert } from 'react-alert'
import { logout} from "../../actions/userActions"
const Header = () => {

    //const alert= useAlert();
    const dispatch= useDispatch();

    const { user, loading } = useSelector(state => state.auth) //auth es el nombre del reducer del store

    const logoutHandler = () =>{ //funcion para cerrar sesion
        dispatch(logout()); //ejecuto la acción de logout que viene del userActions
        //alert.success("LogOut exitoso") 
    }
  return (
    <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>
                        <Link to="/" ><img className='logo' src="./logo.png" alt="TechcenterColombia"></img></Link>
                    </div>
                </div>

                <div className='col-12 col-md-5 mt-2 mt-md-0'>
                    {/*Aqui va buscar*/}
                    <Search />
                </div>
                {/*Boton inicio sesión*/}
                <div className="col-12 col-md-4 mt-4 mt-md-0 text-center">
                    <Link to="/carrito"><i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                        <span className="ml-1" id="cart_count">2</span></Link>

                    {user ? ( //si el usuario existe muestre el dropdown
                        <div className="ml-4 dropdown d-inline">
                            <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                                id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <figure className='avatar avatar-nav'> {/*avatar es una clase de font awesome*/} 
                                    <img //si el usuario tiene una imagen de perfil la muestre
                                        src={user.avatar && user.avatar.url} //si el usuario tiene una imagen de perfil la muestre
                                        alt={user && user.nombre} //src de la imagen alt del usuario
                                        className="rounded-circle"></img>
                                </figure>
                                <span>{user && user.nombre}</span> {/*si el usuario existe muestre su nombre*/}
                            </Link>
                            <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                                {/*Preguntamos el rol de quien esta online*/}
                                {user && user.role === "admin" && ( //si el usuario existe y es admin muestre el link
                                    <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>
                                )}

                                <Link className="dropdown-item" to="/">Pedidos</Link>
                                <Link className="dropdown-item" to="/yo">Mi Perfil</Link> {/*link a mi perfil app js*/} 
                                <Link className="dropdown-item" to="/" onClick={logoutHandler}>Cerrar Sesion</Link>
                            </div>
                        </div>
                    ) : !loading && <Link to="/login" className='btn ml-4' id="login_btn">Login</Link>}
                        {/*si el usuario no existe muestre el boton de login*/}

                </div>

            </nav>

        </Fragment>
    )

}

export default Header