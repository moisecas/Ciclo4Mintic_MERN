import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'

const ProductDetails = () => {
  return (
    <Fragment>
       <MetaData title={'Detalle del producto'}></MetaData> {/*titulo de la pagina*/} 
       <div className='row f-flex justify-content-around'> {/*row es una fila de bootstrap su contenido se va a justificar*/}
              <div className='col-12 col-lg-5 img-fluid' id='product_image'> {/*col-12 es una columna de 12 columnas, col-lg-5 es una columna de 5 columnas en pantallas grandes, img-fluid es una clase de bootstrap para que la imagen se adapte al tamaño de la pantalla*/}
                    <img src='../../images/productos/skinps4slim.jpg' alt='skin ps4 slim'  height="450" width="450" className='w-100' /> {/*w-100 es una clase de bootstrap para que la imagen se adapte al tamaño de la pantalla*/}
              </div>
                <div className='col-12 col-lg-5 mt-5'> {/*col-12 es una columna de 12 columnas, col-lg-5 es una columna de 5 columnas en pantallas grandes, mt-5 es una clase de bootstrap para que la imagen se adapte al tamaño de la pantalla*/}
                    <h3>skin ps4 slim</h3> {/*h3 es un titulo de bootstrap*/}
                    <p id='product_id' className='mt-3'>skin ps4 slim</p> {/*mt-3 es una clase de bootstrap para que la imagen se adapte al tamaño de la pantalla*/}
                    <hr /> {/*hr es una linea horizontal de bootstrap*/}
                    <div className='rating-outer'> {/*rating-outer es una clase de bootstrap*/}
                        <div className='rating-inner'>

                        </div> {/*rating-inner es una clase de bootstrap*/}
                    </div> {/*rating-outer es una clase de bootstrap*/}
                </div>

       </div>
    </Fragment>
  )
}

export default ProductDetails