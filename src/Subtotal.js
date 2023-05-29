import React from "react";
import { useSelector } from "react-redux";

import "./Subtotal.css";

const Subtotal = () => {
  const cart = useSelector(state => state);
  
  const totalCart = cart.length;
  const totalCartPrice = cart.reduce((total, product) => total + product.price , 0)
  
  return (
    <div className="subtotal">
      <p>
        Subtotal ({totalCart} items): <strong>${totalCartPrice}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
