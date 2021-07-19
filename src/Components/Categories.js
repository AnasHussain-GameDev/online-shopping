import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

const Categories = () => {
  const alert = console.log("Alert");

  return (
    <Navbar className="container min-vw-100 navbar-nav-scroll justify-align-content-around">
      <Nav.Item>
        <Button variant="dark" className="ms-1" onClick={alert}>
          All
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="dark" className="ms-1">
          Category1
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="dark" className="ms-1">
          Category2
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="dark" className="ms-1">
          Category3
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="dark" className="ms-1">
          Category4
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="dark" className="ms-1">
          Category5
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="dark" className="ms-1">
          Category6
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="dark" className="ms-1">
          Category7
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="dark" className="ms-1">
          Category8
        </Button>
      </Nav.Item>
    </Navbar>
  );
};

export default Categories;
