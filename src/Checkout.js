import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";
import { CartContextConsumer } from "./CartContext";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <CartContextConsumer>
          {({ basket }) => (
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
          )}
        </CartContextConsumer>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
