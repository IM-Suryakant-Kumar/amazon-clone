import React from "react";
import "./Product.css";
import { CartContextConsumer } from "./CartContext";

const Product = ({ id, title, price, rating, img }) => {

  const addToBasket = (basket, setBasket) => {
    setBasket([...basket, { id, title, price, rating, img }]);
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={img}
        alt=""
      />
      <CartContextConsumer>
        {({basket, setBasket}) => (
          <button onClick={() => addToBasket(basket, setBasket)}>Add to basket</button>
        )}
      </CartContextConsumer>
    </div>
  );
};

export default Product;
