import React from 'react';
import './Product.css'

const Product = (props) => {
    const { image, name, price } = props;

    return <section className="Product">
        <img className="Product img" src="https://via.placeholder.com/150" alt="IMG" />
        <h3>{name || "Default Name"}</h3>
        <h5>₹{price || "Price"}/-</h5>
    </section>
}

export default Product;