import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { CartContext } from "./CartContext";

import "./App.css";

function App() {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  localStorage.setItem("basket", JSON.stringify(basket));

  return (
    <CartContext.Provider value={{ basket, setBasket }}>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />
        </Routes>
      </div>
    </CartContext.Provider>
  );
}

export default App;
