import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Subtotal.css";

const Subtotal = () => {
  const { basket } = useContext(CartContext);
  const totalBasket = basket.length;
  const totalBasketPrice = basket.reduce((totalPrice, product) => {
    return totalPrice + product.price;
  }, 0);


  return (
    <div className="subtotal">
      <p>
        Subtotal ({totalBasket} items): <strong>${totalBasketPrice}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
