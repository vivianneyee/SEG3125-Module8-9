import React from 'react'
import Logo from './images/logo.png'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import './navbar.css'
import ContactUs from './contact'

function NavBar() {
  return (
    <div class="nav-menu">
      <Navbar expand="lg" className="my_navbar">
        <div className="navbar-container">
          <Navbar.Brand href="#home" className="nav-logo">
            <img src={Logo}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="nav-links">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <a className="page-link" href="#classes">Classes</a>
                <Nav.Link className="page-link" href="#blog">Blog</Nav.Link>
                <Nav.Link href="#becomeMember" className="nav-button">Become a Member</Nav.Link>
                <ContactUs/>

              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
// <NavDropdown title="language">
//   <NavDropdown.Item onClick={setEnglish}>English<NavDropdown.Item>
//   <NavDropdown.Item onClick={setFrench}>Francais<NavDropdown.Item>
// </NavDropdown>
export default NavBar
