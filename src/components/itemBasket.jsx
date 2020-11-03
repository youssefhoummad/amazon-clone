import React from "react";
import { useStateValue } from "../stateProvider";
import "./itemBasket.css";

const ItemBasket = ({ id, title, price, image, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: { id, title, price, image, rating }
    });
  };
  return (
    <div className="itemBasket">
      <img src={image} alt="" />

      <div className="infos">
        <p>{title}</p>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={`star${i}`} role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
        <button onClick={removeFromBasket}>remove from basket</button>
      </div>
    </div>
  );
};

export default ItemBasket;
