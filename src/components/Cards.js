import { React, Fragment } from "react";
import CardItem from "./CardItem";
import "./Card.css";
import Image9 from "../images/img-9.jpg";
import Image2 from "../images/img-2.jpg";
import Image3 from "../images/img-3.jpg";
import Image4 from "../images/img-4.jpg";
import Image8 from "../images/img-8.jpg";
const Cards = () => {
  return (
    <Fragment>
      <div className="cards">
        <h1>Check out These EPIC Destinations!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={Image9}
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src={Image2}
                text="Travel thhrough the Islands of Bali in a Private Cruise"
                label="Luxury"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src={Image3}
                text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                label="Mystery"
                path="/services"
              />
              <CardItem
                src={Image4}
                text="Experience Football on Top of the Himilayan Mountains"
                label="Adventure"
                path="/products"
              />
              <CardItem
                src={Image8}
                text="Ride through the Sahara Desert on a guided camel tour"
                label="Adrenaline"
                path="/sign-up"
              />
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;
