import React, { Fragment } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 

const Header = () => {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">cursos.com</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="/ventasadmin">Ventas</Nav.Link>
            <Nav.Link href="/productoscliente">Cliente</Nav.Link>
            <Nav.Link href="/productosadmin">Admin</Nav.Link> 
            <Nav.Link href="/carrito">Carrito</Nav.Link> 
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </Fragment>
    )
}

export default Header