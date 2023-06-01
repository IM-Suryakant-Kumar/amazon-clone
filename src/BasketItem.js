import React from "react";
import { useDispatch } from "react-redux";

import { removeFromCart } from "./redux";
import "./BasketItem.css";

const BasketItem = ({
    product: { id, img, title, price, rating }
}) => {
    const dispatch = useDispatch()

    const dispatchRemoveFromCart = () => {
        dispatch(removeFromCart(id))
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

                <button onClick={dispatchRemoveFromCart}>
                    Remove from basket
                </button>
            </div>
        </div>
    );
};

export default BasketItem;
