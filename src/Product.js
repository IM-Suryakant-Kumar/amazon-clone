import React from "react";
import "./Product.css";

const Product = ({ title, price, rating, img }) => {

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            Array(rating).fill().map((_, i) => (
              <p>⭐</p>
            ))
          }
        </div>
      </div>
      <img
        src={img}
        alt=""
      />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
