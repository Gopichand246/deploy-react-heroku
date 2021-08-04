import React from "react";
import userData from "../data/UserData.js";
import "./styles.css";

function Projects() {
  return (
    <div className="projects" id="projectNav">
      <span className="pageIcon"> Projects</span> <br />
      <div className="allCards">
        {userData.projects.map((data) => {
          return (
            <div className="projectCard">
              <img src={data.Image} alt="fire" width="100%" height="70%" />
              <div className="projectText">
                <b>{data.tagLine}</b> <br />
                <span className="projectDomain"> {data.domain}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
