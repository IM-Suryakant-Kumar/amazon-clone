import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format"

import { getCartTotalPrice } from "./redux"
import "./Subtotal.css";

const Subtotal = () => {
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate()

    const totalCart = cart.length;

    return (
        <div className="subtotal">
            <p>
                Subtotal ({totalCart} items): <strong>
                    {<CurrencyFormat 
                        value={getCartTotalPrice(cart)}
                        decimalScale={2}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                    />}
                </strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>

            <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;
