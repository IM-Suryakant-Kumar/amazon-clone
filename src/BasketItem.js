import React, { useContext } from "react";
import "./BasketItem.css";
import { CartContext } from "./CartContext";

const BasketItem = ({ product: { id, img, title, price, rating } }) => {
  const { basket, setBasket } = useContext(CartContext);

  const removeFromBasket = () => {
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

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default BasketItem;
