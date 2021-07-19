import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

const Categories = () => {
  const alert = console.log("Alert");

  return (
    <Navbar className="mt-3 container min-vw-100 navbar-nav-scroll justify-align-content-around">
      <Nav.Item>
        <Button variant="dark" className="ms-1" onClick={alert}>
          All
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="dark" className="ms-1">
          Snacks
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="dark" className="ms-1">
          Staples
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="dark" className="ms-1">
          Dairy
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="dark" className="ms-1">
          Beauty/Care
        </Button>
      </Nav.Item>
    </Navbar>
  );
};

export default Categories;
