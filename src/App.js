import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"
import { trackUserOnAuthStateChanged } from "./firebase";
import { setUser } from "./redux";
import "./App.css";

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
      </Routes>
    </div>
  );
}

export default App;
