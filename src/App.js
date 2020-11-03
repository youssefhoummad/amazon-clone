import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import "./styles.css";

import { Switch, BrowserRouter, Route } from "react-router-dom";
import Checkout from "./components/checkout";
export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/checkout">
              <Checkout />
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
