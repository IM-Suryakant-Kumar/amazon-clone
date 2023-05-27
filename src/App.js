import React from "react";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

import "./App.css";

function App() {

  return (
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
  );
}

export default App;
