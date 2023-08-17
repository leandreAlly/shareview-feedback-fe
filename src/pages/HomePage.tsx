import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Newsletter from "../components/NewLetter";
import Pricing from "../components/Pricing";
import Testimoni from "../components/Testimoni";
import testmoni from "../data/testimoni";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Pricing />
      <Testimoni listTestimoni={testmoni} />
      <Newsletter />
      <Contact />
    </>
  );
};

export default HomePage;
