import React, { Fragment } from "react";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import "../../App.css";
import Footer from "../Footer";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <Cards />
      <Footer />
    </Fragment>
  );
};

export default Home;
