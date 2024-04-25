import "./ExperienceStyle.css";
import html from "../assets/htmllogo.png";
import SkillCardData from "./ExperienceCardData";

import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div>
      <div className="exp-container">
        <h1 className="skill-heading">Experience</h1>
        <div className="skill-container">
          {SkillCardData.map((val, ind) => {
            return (
              <ExperienceCard key={ind} imgsrc={val.imgsrc} text={val.text} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
