import React, { useContext } from "react";
import "./Product.css";
import { CartContext } from "./CartContext";

const Product = ({ id, title, price, rating, img }) => {
  const { setBasket } = useContext(CartContext);

  const addToBasket = () => {
    setBasket((prevBasket) => [
      ...prevBasket,
      { id, title, price, rating, img },
    ]);
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
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
