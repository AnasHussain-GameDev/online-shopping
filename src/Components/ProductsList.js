import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./ProductsList.css";
import { items } from "../data.json";

const ProductList = (props) => {
  const [selectedcategory, setSelectedcategory] = useState();
  const category = props.category;

  const showCategories = (category) => {
    if (category === "All") {
      const productsdata = items.map((props) => {
        return <Product key={props.Id} {...props} />;
      });
      setSelectedcategory(productsdata);
    } else {
      const filteredproductsdata = items.filter(
        (items) => items.category === category
      );
      const productsdata = filteredproductsdata.map((props) => {
        return <Product key={props.Id} {...props} />;
      });
      setSelectedcategory(productsdata);
    }
  };
  useEffect(() => {
    showCategories(category);
  }, [category]);

  return (
    <>
      <h2>
        Current Category: <b>{props.category}</b>
      </h2>
      <div className="List">{selectedcategory}</div>
    </>
  );
};

export default ProductList;
