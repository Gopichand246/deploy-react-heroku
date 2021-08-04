import React from "react";
import userData from "../data/UserData.js";

import "./styles.css";

function Education() {
  return (
    <div className="edu">
      <span className="pageIcon"> Education</span> <br />
      <div className="allEduCards">
        {userData.Education.map((data) => {
          return (
            <div className="eduCard">
              <img
                src={data.logo}
                alt="IIITS"
                width="12%"
                className="eduLogo"
              />
              <span className="degree"> {data.degree}</span>
              <span className="timeline"> {data.Timeline}</span>
              <ui className="eduText">
                <li>
                  <span className="eduName">{data.name} </span>
                </li>
                <li className="eduScore">
                  <span className="eduScoreTxt"> {data.marks} </span>
                </li>
              </ui>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
