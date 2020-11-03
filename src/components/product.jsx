import React from "react";
import { useStateValue } from "../stateProvider";
import "./product.css";

const Product = ({ id, title, price, image, rating }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, price, image, rating }
    });
  };
  return (
    <div className="product">
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
              <span role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
        <img src={image} alt="" />
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
