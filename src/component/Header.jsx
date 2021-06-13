import React from 'react'
import { Navbar ,  Nav  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../component/Header.css"

function Header() {
    return (
        <>
        <Navbar expand="lg" className="total-nav">
  <Navbar.Brand href="#home"> <span className="organic"> organic </span></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home"><span className="Home">Home </span></Nav.Link>
      <Nav.Link href="#link"><span className="Products">Products </span></Nav.Link>
      <Nav.Link href="#home"><span className="Blog">Blog </span></Nav.Link>
      <Nav.Link href="#link"><span className="About-Us">About us </span></Nav.Link>
      <Nav.Link href="#home"><div className="Rectangle-48"><span className="Contact">Contact </span></div></Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default Header
