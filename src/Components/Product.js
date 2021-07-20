import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";

const Product = (props) => {
  return (
    <Card
      className="m-1 p-2 "
      border="dark"
      onClick={() => console.log("hello")}
    >
      <Card.Img variant="top" className="my-img" src={props.Image} />
      <Card.Body className="position-relative fixed-bottom">
        <Card.Title className="fs-m">{props.Name}</Card.Title>
        <Card.Text className="fs-m">₹{props.Price || "Price"}/- </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
