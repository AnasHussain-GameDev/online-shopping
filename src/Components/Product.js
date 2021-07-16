import React from 'react';
import './Product.css'

const Product = (props) => {
    const { image, name, price } = props;

    return <article className="Product">
        <div className="product img">
            <img src={ image || "https://via.placeholder.com/100"} alt="IMG" />
        </div>
        <h3>{name || "Default Name"}</h3>
        <h5>₹{price || "Price"}/- </h5>
    </article>
}

export default Product;