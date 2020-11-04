import React, { useEffect } from "react";
import Header from "./components/header";
import Home from "./components/home";
import "./styles.css";

import { Switch, BrowserRouter, Route } from "react-router-dom";
import Checkout from "./components/checkout";
import Login from "./components/login";
import { auth } from "./firebase";
import { useStateValue } from "./stateProvider";
import Payment from "./components/payment";

export default function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((auth) => {
      console.log(auth);
      if (auth) {
        dispatch({
          type: "SET_USER",
          user: auth
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}
