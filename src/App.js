import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"
import "./App.css";

function App() {

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
      </Routes>
    </div>
  );
}

export default App;
