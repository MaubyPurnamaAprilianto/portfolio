import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import FormComponent from "../components/FormComponent";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Lets have a chat " />
      <FormComponent />
      <Footer />
    </div>
  );
};

export default Contact;
