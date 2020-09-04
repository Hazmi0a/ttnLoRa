import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styles from "./Header.module.css";

export const Header = ({ Title, actionlist }) => {
  return (
    <Navbar bg="light" expand="lg" className={styles.spacing}>
      <Navbar.Brand href="#home">{Title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Actions" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">KEK</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">TEK</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Read Fillkey</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Read CIK</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
Header.defaultProps = {
  Title: "TTN",
};
