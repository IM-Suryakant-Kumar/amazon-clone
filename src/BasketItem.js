import React from "react";
import "./BasketItem.css";
import { CartContextConsumer } from "./CartContext";

const BasketItem = ({ product: { id, img, title, price, rating } }) => {
  const removeFromBasket = (basket, setBasket) => {
    setBasket(basket.filter((product) => product.id !== id));
  };

  return (
    <div className="basketitem">
      <img
        src={img}
        alt=""
      />
      <div className="basketitem__info">
        <p className="basketitem__title">{title}</p>
        <p className="basketitem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketitem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        <CartContextConsumer>
          {({ basket, setBasket }) => (
            <button onClick={() => removeFromBasket(basket, setBasket)}>
              Remove from basket
            </button>
          )}
        </CartContextConsumer>
      </div>
    </div>
  );
};

export default BasketItem;
