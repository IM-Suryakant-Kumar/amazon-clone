import React from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "./redux";
import "./Product.css";

const Product = ({ id, title, price, rating, img }) => {
    const dispatch = useDispatch();

    const dispatchAddToCart = () => {
        dispatch(addToCart({ id, title, price, rating, img }))
    }

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
            <button onClick={dispatchAddToCart}>Add to basket</button>
        </div>
    );
};

export default Product;
