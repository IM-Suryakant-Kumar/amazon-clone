import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"
import Payment from "./Payment"
import { trackUserOnAuthStateChanged } from "./firebase";
import { setUser } from "./redux";
import "./App.css";

const promise = loadStripe("pk_test_51NE5HoSB0RMAP83ETe0jUwGuLgkQimzw1A50oiok0Z3VYBYsMZGRdXSPzrykSHf9rYl78eu13myAMbHjtZTaWoF300kIuJdy9s")

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        trackUserOnAuthStateChanged(dispatch, setUser)
    }, [])

    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <Header />
                            <Home />
                        </div>
                    }
                />

                <Route
                    path="/checkout"
                    element={
                        <div>
                            <Header />
                            <Checkout />
                        </div>}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/payment"
                    element={
                        <div>
                            <Header />
                            <Elements stripe={promise}>
                                <Payment />
                            </Elements>
                        </div>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
