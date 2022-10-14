import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
        <footer className='py-1'>
            <p className='text-center mt-1'>
                TechcenterColombia &copy; {new Date().getFullYear()}
            </p>
        </footer>


    </Fragment>
  )
}

export default Footer