import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";

import "./Header.css";
import store from "../store";

const Header = (props) => {
  store.subscribe(() => {
    const state = store.getState();
    setCount(state.count);
  });

  const [count, setCount] = useState(0);
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
        <Link className="text-dark text-decoration-none mx-3" to="/Cart">
          <div className="counter">{count}</div>
          <BiCart></BiCart>
        </Link>
      </Navbar>
    </>
  );
};

export default Header;
