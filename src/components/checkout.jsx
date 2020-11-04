import React from "react";
import { useStateValue } from "../stateProvider";
import "./checkout.css";
import ItemBasket from "./itemBasket";
import Subtotal from "./subtotal";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="left">
        <h4>Hello, {user?.email}</h4>
        <h2 className="title">Your shopping basket</h2>
        {basket.map((item) => (
          <ItemBasket
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
