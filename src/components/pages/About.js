import React from "react";
import "./styles.css";

function About() {
  return (
    <div className="about" id="aboutNav">
      <span className="pageIcon"> About Me</span> <br />
      <img
        src=""
        alt="profile Icon"
        className="profileIcon"
      />
      <div className="aboutText">
        I am Sushmitha Dogga, a final year ECE undergraduate at Andhra University College of Engineering for Women. I have
        worked in multiple domains in my projects, mainly Big Data Analytics and web development. Coming to my personal life, I love watching and
        playing cricket. Presently I am looking forward to expand my skills and
        to get hands on experience in the industry.
      </div>
    </div>
  );
}

export default About;
