import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { setUser } from "./redux";
import { handleSignOut } from "./firebase"
import "./Header.css";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleAuthentication = () => {
    if(user) {
      handleSignOut(dispatch, setUser)
    }
  }

  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </NavLink>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <NavLink to={ !user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello { user ? user.email : "Guest"}</span>
            <span className="header__optionLineTwo">{user ? "Sign out" : "Sign In"}</span>
          </div>
        </NavLink>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <NavLink to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {cart.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
