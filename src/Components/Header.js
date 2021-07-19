import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">GroceryMate</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav.Link href="/Login">Signup/in</Nav.Link>
            <Nav.Link href="/AboutUs">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
