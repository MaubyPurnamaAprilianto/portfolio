import "./HeroImgStyle.css";
import React from "react";
import { Link } from "react-scroll";

import IntroImg from "../assets/intro-bg.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A MAUBY.</p>
        <h1>
          I'm a web developer in Dayeuhluhur
          <br /> Welcome to My PORTFOLIO
        </h1>
        <div className="">
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={15}
            duration={500}
            className="btn"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={15}
            duration={500}
            className="btn btn-light"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
