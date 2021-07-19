import React from "react";
import Categories from "../Components/Categories";
import ProductsList from "./ProductsList";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="Container">
      <div className="categories">
        <Categories />
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
