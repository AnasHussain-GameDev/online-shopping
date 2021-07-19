import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";

import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Link className="text-decoration-none" to="/">
          <Navbar.Brand>GroceryMate</Navbar.Brand>
        </Link>
        <Link className="text-dark text-decoration-none mx-3" to="/Login">
          Signup/in
        </Link>
        <Link className="text-dark text-decoration-none mx-3" to="/ContactUs">
          Contact Us
        </Link>
        <Link className="text-dark text-decoration-none mx-3" to="/AboutUs">
          About Us
        </Link>
        <Link className="text-dark text-decoration-none mx-3" to="#">
          <BiCart />
        </Link>
      </Navbar>
    </>
  );
};

export default Header;
