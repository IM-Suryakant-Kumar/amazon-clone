import React from "react";
import { CartContextConsumer } from "./CartContext";
import "./Subtotal.css";

const Subtotal = () => {
  
  return (
    <div className="subtotal">
      <CartContextConsumer>
        {({basket}) => {
          const totalBasket = basket.length;
          const totalBasketPrice = basket.reduce((totalPrice, product) => {
            return totalPrice + product.price;
          }, 0);

          return (
            <p>
              Subtotal ({totalBasket} items): <strong>${totalBasketPrice}</strong>
            </p>
          )
        }}
      </CartContextConsumer>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
