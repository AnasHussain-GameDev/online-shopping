import React from "react";
import { Card } from "react-bootstrap";

const Product = (props) => {
  const { image, Name, Price } = props;

  return (
    <Card onClick={() => console.log("hello")}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{Name}</Card.Title>
        <Card.Text>₹{Price || "Price"}/- </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
