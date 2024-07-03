import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import AboutContent from "../components/AboutContent";
import FormComponent from "../components/FormComponent";
import Experience from "../components/Experience";
// import Education from "../components/Education";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <HeroImg />
      <AboutContent id="about" />
      <Experience />
      {/* <Education /> */}
      <Work id="work" />
      <FormComponent id="contact" />
      <Footer />
    </div>
  );
};

export default Home;
