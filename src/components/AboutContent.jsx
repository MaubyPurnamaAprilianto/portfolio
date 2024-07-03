import React from "react";
import { Link } from "react-scroll";
import { FaArrowDown } from "react-icons/fa"; // You can import other icons as needed
import "./AboutContentStyle.css";
import Mauby from "../assets/Mauby.png";

const AboutContent = () => {
  return (
    <div className="about" id="about">
      <div className="right">
        <div className="img-container">
          <div className="">
            <img src={Mauby} className="img" alt="Mauby" />
          </div>
        </div>
      </div>
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a React front-end developer. I create responsive and secure websites for my clients.
        </p>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset as per your design
          duration={500}
        >
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
