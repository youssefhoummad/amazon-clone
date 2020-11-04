import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../stateProvider";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  const getBasketTotal = (basket) => {
    let total = 0;
    basket.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
      />
      <button onClick={() => history.push("/payment")}>
        Proceced to checkout
      </button>
    </div>
  );
};

export default Subtotal;
