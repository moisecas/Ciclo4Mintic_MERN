import React, { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
        <nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <img src="./images/logo.png" alt="TechcenterColombia"></img>
                </div>
            </div>

            <div className='col-12 col-md-6 mt-2 mt-md-0'>
                <div className="input-group">
                    <input 
                        type="text"
                        id="search_field"
                        class="form-control"
                        placeholder='Que producto busca?'></input>
                        <div class="input-group-append">
                            <button id="search-btn" class="btn">
                                <i class="fa fa-search-plus fa-2x text-white" aria-hidden="true"></i>
                                
                                </button>    
                        </div>
                </div>
            </div>
            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                <span><button type="button" class="btn btn-warning">Iniciar sesión</button></span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="true"></i>   
                <span className="ml-1" id="cart_count">5</span>
            </div>

        </nav>

    </Fragment>
  )
}

export default Header