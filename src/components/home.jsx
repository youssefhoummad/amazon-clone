import React from "react";
import "./home.css";
import Product from "./product";

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
        alt=""
        className="full_image"
      />
      <div className="row">
        <Product
          id="dsfdf"
          title="the learn startup"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          rating={3}
          price={29.99}
        />
        <Product
          id="983ysdd4n0275"
          title="Beuaty pick"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
          rating={4}
          price={11.99}
        />
        <Product
          id="jl4n0275"
          title="Start on your holiday list"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
          rating={4}
          price={9.99}
        />
      </div>
    </div>
  );
};

export default Home;
