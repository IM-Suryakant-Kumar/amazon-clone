import React from "react";
import { useSelector } from "react-redux";

import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";
import "./Checkout.css";

const Checkout = () => {
  const cart = useSelector(state => state)

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">Shopping Cart</h2>
          {cart.map((product) => (
            <BasketItem
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
