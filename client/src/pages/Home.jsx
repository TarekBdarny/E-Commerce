import React from "react";
import Carousel from "../components/Carousel";
import SpecialOffers from "../components/SpecialOffers";
import Card from "../components/Card";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <SpecialOffers
        heading={"10% off on all products"}
        content={"Free Shipping"}
      />
      <Carousel />
      <Products />
    </div>
  );
};

export default Home;
