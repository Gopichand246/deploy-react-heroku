import React from "react";
import "./styles.css";

function About() {
  return (
    <div className="about" id="aboutNav">
      <span className="pageIcon"> About Me</span> <br />
      <img
        src="/images/profilePic2.jpg"
        alt="profile Icon"
        className="profileIcon"
      />
      <div className="aboutText">
        I am siripurapu Gopichand, a final year ECE undergraduate at Indian
        Institute of Information Technology (IIIT SriCity). I am an IOT
        (Internet of Things) enthusiast and a Full Stack Developer. I have
        worked in multiple domains in my projects, mainly IoT, Machine Learning
        and web development. Coming to my personal life, I love watching and
        playing cricket. Presently I am looking forward to expand my skills and
        to get hands on experience in the industry.
      </div>
    </div>
  );
}

export default About;
