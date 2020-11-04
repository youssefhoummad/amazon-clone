import React from "react";
import { useStateValue } from "../stateProvider";
import ItemBasket from "./itemBasket";
import "./payment.css";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <h1>Checkout ({basket.length} items)</h1>
      <div className="delivery">
        <h4>Delivery Address</h4>
        <div>
          <p>{user?.email || "Guset"}</p>
          <p>123 React languge</p>
          <p>Elkelaa, Morroco</p>
        </div>
      </div>
      <div className="review">
        <h4>Review items</h4>
        <div>
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
      </div>
      <div className="method">
        <h4>Method paymnet</h4>
        <p>ipsum reaf</p>
      </div>
    </div>
  );
};

export default Payment;
