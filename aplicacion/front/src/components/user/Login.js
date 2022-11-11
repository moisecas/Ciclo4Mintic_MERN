import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData'
import { Link, useNavigate } from "react-router-dom"
import { login, clearErrors } from "../../actions/userActions"
import { useDispatch, useSelector } from 'react-redux' //para usar el dispatch y el useSelector

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("") //cambiar los estados de las variables que por defectos estan vacias
    const [password, setPassword] = useState("")//cambiar los estados de las variables que por defectos estan vacias 
    const dispatch = useDispatch(); //para usar el dispatch
    const { isAuthenticated, error, loading } = useSelector(state => state.auth) //traemos la información del estado de auth

    useEffect(() => { //que va a hacer cuando autentique que va a depnder del estado de isAuthenticated
        if (isAuthenticated) {
            navigate("/")
        }
        if (error) {
            dispatch(clearErrors)
        }
    }, [dispatch, isAuthenticated, error]) //debe enviar datos de regreso para que funcione 

    const submitHandler = (e) => { //funcion para enviar los datos del formulario a la base de datos 
        e.preventDefault(); //para que no se recargue la pagina
        dispatch(login(email, password)) //dispatch para enviar los datos al back, despacho la acción de login con los datos del email y el password
    }

    return (
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                <Fragment>
                    <MetaData title={"Inicie Sesión"} />
                    <div className='row wrapper'>
                        <div className='col-10 col-lg-5'>
                            <form className='shadow-lg' onSubmit={submitHandler}> {/*cuando se envie el formulario se ejecuta el submitHandler*/}
                                <h1 className='mb-3'>Inicio de Sesión</h1>
                                {/*Campo para email*/}
                                <div className='form-group'>
                                    <label htmlFor='email_field'>Correo electrónico</label>
                                    <input type="email"
                                        id="email_field"
                                        className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}></input> {/*cada vez que se cambie el valor del input se va a cambiar el estado de la variable email*/}
                                </div>
                                {/*Campo para contraseña*/}
                                <div className='form-group'>
                                    <label htmlFor='password_field'>Contraseña</label>
                                    <input type="password"
                                        id="password_field"
                                        className='form-control'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}  
                                    ></input>
                                </div>

                                <Link to="/password/forgot" className='float-right mb-4'>Olvidó su contraseña?</Link>

                                {/*Boton iniciar sesiòn*/}
                                <button id="login_button" type="submit" className='btn btn-block py-3'>LOGIN</button>

                                <Link to="/register" className='float-right mt-3'>Usuario nuevo? Registrese aquí</Link>

                            </form>
                        </div>
                    </div>

                </Fragment>
            )}
        </Fragment>
    )
}