import React from "react";
import "./Product.css";

const Product = (props) => {
  const { image, Name, Price } = props;

  return (
    <article className="Product">
      <div className="product img">
        <img src={image || "https://via.placeholder.com/100"} alt="IMG" />
      </div>
      <h5>{Name || "Default Name"}</h5>
      <p>₹{Price || "Price"}/- </p>
    </article>
  );
};

export default Product;
