import React, { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
        <h1 id='encabezado_productos text-center'>Últimos productos</h1> 
        <section id='productos' className='container mt-5'>
            <div className='row'>
            {/* <!-- Producto 1 --> */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/skinps4slim.jpg' alt='skin ps4 slim'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'> <a href='http://localhost:3000'>  PS4 Slim Skin </a></h5> 
                            <div className='ratings mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='no_reviews'>(5) Reviews</span> 

                            </div>
                            <p className='card-text'> $ 20.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>Ver producto</a>

                        </div>
                    </div>
                </div>
                {/* <!-- Producto 2 --> */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/skinps5.jpg' alt='skin ps4 slim'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'> <a href='http://localhost:3000'>  PS5 Slim Skin </a></h5> 
                            <div className='ratings mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='no_reviews'>(5) Reviews</span> 

                            </div>
                            <p className='card-text'> $ 50.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>Ver producto</a>

                        </div>
                    </div>
                </div>
                {/* <!-- Producto 3 --> */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/skinseriesx.jpg' alt='skin ps4 slim'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'> <a href='http://localhost:3000'>  Series X Skin </a></h5> 
                            <div className='ratings mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='no_reviews'>(5) Reviews</span> 

                            </div>
                            <p className='card-text'> $ 30.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>Ver producto</a>

                        </div>
                    </div>
                </div>
                {/* <!-- Producto 4 --> */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/skinxboxone.jpg' alt='skin ps4 slim'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'> <a href='http://localhost:3000'>  Xbox One S Skin </a></h5> 
                            <div className='ratings mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='no_reviews'>(5) Reviews</span> 

                            </div>
                            <p className='card-text'> $ 40.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>Ver producto</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>



    </Fragment>
  )
}

export default Home