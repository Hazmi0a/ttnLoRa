import React, { useState, useEffect } from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styles from "./Header.module.css";

export const Header = ({ Title, actionlist }) => {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const refreshPage = (counter) => {
    return counter == 0 ? setCounter(30) : counter;
  };

  return (
    <Navbar bg="light" expand="lg" className={styles.spacing}>
      <Navbar.Brand href="#home">{Title}</Navbar.Brand>
      <Navbar.Text className={styles.justify_content_end}>
        {refreshPage(counter)}
      </Navbar.Text>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>

          <NavDropdown title="Actions" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">KEK</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
Header.defaultProps = {
  Title: "TTN",
};
