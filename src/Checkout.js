import React, { useContext } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";
import { CartContext } from "./CartContext";

const Checkout = () => {
  const { basket } = useContext(CartContext);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">Shopping Cart</h2>

          {basket.map((product) => (
            <BasketItem
              key={product.id}
              product={product}
            />
          ))}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
