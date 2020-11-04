import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../stateProvider";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const signOut = () => {
    dispatch({
      type: "SIGN_OUT",
      user: null
    });
  };

  return (
    <div className="header">
      <Link to="/">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>
      <div className="search">
        <input type="text" />
        <SearchIcon className="icon" />
      </div>
      <div className="options">
        <div className="option">
          <div className="option_one">Hello {user ? user.email : "Guest"} </div>
          <div className="option_two">
            {user ? (
              <Link onClick={signOut}>sign out</Link>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
          </div>
        </div>
        <div className="option">
          <div className="option_one">Return's</div>
          <div className="option_two">& Order</div>
        </div>
        <div className="option">
          <div className="option_one">Your</div>
          <div className="option_two">Prime</div>
        </div>
        <Link to="/checkout">
          <div className="option basket">
            <ShoppingBasketIcon />
            <span className="option_two option_basket">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
