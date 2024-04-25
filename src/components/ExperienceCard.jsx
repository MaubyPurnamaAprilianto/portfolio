import "./ExperienceStyle.css";

import React from "react";

const ExperienceCard = (props) => {
  return (
    <div className="skill-card">
      <img src={props.imgsrc} alt="Image" />
      <div className="skill-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
