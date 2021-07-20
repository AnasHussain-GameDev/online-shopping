import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed-bottom bg-dark text-center">
      <h5>
        <Link className="badge badge-secondary" to="/ContactUs">
          Contact Us
        </Link>
      </h5>
      <h5>
        <Link className="badge badge-secondary" to="/Feedback">
          Feedback
        </Link>
      </h5>
    </div>
  );
};

export default Footer;
