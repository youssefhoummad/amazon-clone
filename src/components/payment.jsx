import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../stateProvider";
import ItemBasket from "./itemBasket";
import CurrencyFormat from "react-currency-format";

import "./payment.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(false);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // i dont-t why 100
        url: `payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  const handleSumbit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      })
      .then((paymentIntent) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace("/orders");
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  const getBasketTotal = (basket) => {
    let total = 0;
    basket.forEach((item) => {
      total += item.price;
    });
    return total;
  };

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
        <form>
          <CardElement onChange={handleChange} />
          <CurrencyFormat
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value) => (
              <p>
                Order total: <strong>{value}</strong>
              </p>
            )}
          />
          <button
            onClick={handleSumbit}
            disabled={error || processing || disabled || succeeded}
          >
            {processing ? "Processing" : "Buy now"}
          </button>
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Payment;
