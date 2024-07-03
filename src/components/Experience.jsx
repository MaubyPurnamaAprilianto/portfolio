import "./ExperienceStyle.css";
import SkillCardData from "./ExperienceCardData";

import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div>
      <div className="exp-container">
        <h1 className="skill-heading">Skill</h1>
        <div className="skill-container">
          {SkillCardData.map((val, ind) => {
            return (
              <ExperienceCard
                key={ind}
                imgsrc={val.imgsrc}
                text={val.text}
                color={val.color}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
