import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <ul className="Navbar">
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
    </ul>
  );
};

export default Header;
