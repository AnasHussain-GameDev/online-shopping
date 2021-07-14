import React from "react";
import ProductsList from "../Components/ProductsList";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="Container">
      <div className="categories">
        <h1>Categories</h1>
      </div>
      <div className="filters">
        <h1>Filters</h1>
      </div>
      <div className="products">
        <ProductsList />
      </div>
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default Shop;
