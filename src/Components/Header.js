import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Button } from "react-bootstrap";

import "./Header.css";

const Header = () => {
  return (
    <>
      {/* <ul className="Navbar">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/Shop">
            Shop
          </Link>
        </li>
        <li>
          <Link className="link" to="/AboutUs">
            About Us
          </Link>
        </li>
      </ul> */}
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">GroceryMate</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav.Link href="/Shop">Shop</Nav.Link>
            <Nav.Link href="/AboutUs">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
