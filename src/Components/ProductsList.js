import React from "react";
import Product from "./Product";
import "./ProductsList.css";
import { items } from "../data.json";

const ProductList = () => {
  const productsdata = items.map((props) => {
    return <Product key={props.id} {...props} />;
  });
  return <div className="List">{productsdata}</div>;
};

export default ProductList;
