import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavBar/NavBar.css'


const NavBar = () => {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a><Link to="/" className='NoDecoration navbar-brand'>Dallacosta Shop</Link></a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/category/jewelery" className="nav-link">Jewelery</Link>
              </li>
              <li className="nav-item">
                <Link to="/category/electronics" className="nav-link" >Electronics</Link>
              </li>
            
            </ul>
          </div>
          <Link to="/cart"><CartWidget /></Link>
        </div>
      </nav>
        
    )
}
export default NavBar

/*

<Navbar bg="secondary" variant="secondary">
        <Container>
          <Navbar.Brand href="#home">Dallacosta Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Indumentaria</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>



*/