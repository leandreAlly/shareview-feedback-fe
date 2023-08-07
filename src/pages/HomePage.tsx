import React from "react";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import About from "../components/About";
import Newsletter from "../components/NewLetter";
import Testimoni from "../components/Testimoni";
import testmoni from "../data/testimoni";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Pricing />
      <Testimoni listTestimoni={testmoni} />
    </>
  );
};

export default HomePage;
