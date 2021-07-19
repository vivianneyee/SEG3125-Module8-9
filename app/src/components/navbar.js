import React from 'react'
import Logo from './images/logo.png'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import './navbar.css'
import ContactUs from './contact'
import { useTranslation } from 'react-i18next';
import i18n from "i18next";

function NavBar() {
  const {t,i18n} = useTranslation();
  const changeLang = (lng) => {
    i18n.changeLanguage(lng)
  }
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
                <a className="page-link" href="#classes">{t("nav-classes")}</a>
                <Nav.Link className="page-link" href="#blog">{t("nav-blog")}</Nav.Link>
                <Nav.Link href="#becomeMember" className="nav-button">{t("become-member")}</Nav.Link>
                <ContactUs name={t("nav-contact")}/>
                <NavDropdown className="languageDropdown" title={t("nav-lang")}>
                  <NavDropdown.Item onSelect={() => i18n.changeLanguage('en')}>English</NavDropdown.Item>
                  <NavDropdown.Item onSelect={() => i18n.changeLanguage('fr')}>Français</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
export default NavBar
