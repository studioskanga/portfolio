import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function Navigation () {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" text-align="right" variant="dark">
        <Navbar.Brand href="#home">Evans Kosgei</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#About me">About Us</Nav.Link>
            <Nav.Link href="#Portofolio">Portofolio</Nav.Link>
            <Nav.Link href="#Contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
export default Navigation;