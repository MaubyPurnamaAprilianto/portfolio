import "./WorkCardStyle.css";
import React from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCradData";

const Work = () => {
  return (
    <div className="work-container" id="project">
      <h1 className="project-heading">Project</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
