import React, { useState } from "react";
import "./styles.css";
import { MdCloudDownload, MdEmail, MdCall } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import userData from "../data/UserData.js";

function Contact() {
  const [mail, setMail] = useState(true);
  const [call, setCall] = useState(true);
  const mailClick = () => {
    if (setMail) {
      setMail(false);
    } else {
      setMail(true);
    }
  };
  const callClick = () => {
    if (setCall) {
      setCall(false);
    } else {
      setCall(true);
    }
  };

  return (
    <div className="contact" id="contactNav">
      <span className="pageIcon"> Contact Me</span> <br />
      <div className="allContactBlocks">
        <div className="contactBlock">
          <span className="contactIcon">
            {" "}
            <MdCloudDownload size="4vh" id="contact-ico" />
          </span>
          <a
            href="/MyResume.pdf"
            download="Gopichand-Resume.pdf"
            className="contactBlockTxt"
          >
            RESUME
          </a>
        </div>
        <div className="contactBlock">
          <span className="contactIcon">
            {" "}
            <MdEmail size="4vh" id="contact-ico" />
          </span>
          <span className="contactBlockTxt" onClick={mailClick}>
            {mail ? "EMAIL" : userData.Contact.Email}
          </span>
        </div>
        <div className="contactBlock">
          <span className="contactIcon">
            {" "}
            <MdCall size="4vh" id="contact-ico" />
          </span>
          <span className="contactBlockTxt" onClick={callClick}>
            {call ? "CALL ME" : userData.Contact.Mobile}
          </span>
        </div>
        <div className="contactBlock">
          <span className="contactIcon">
            {" "}
            <FaFacebookF size="4vh" id="contact-ico" />
          </span>
          <a href={userData.Contact.Facebook} className="contactBlockTxt">
            FACEBOOK
          </a>
        </div>
        <div className="contactBlock">
          <span className="contactIcon">
            {" "}
            <AiFillInstagram size="4vh" id="contact-ico" />
          </span>
          <a href={userData.Contact.Instagram} className="contactBlockTxt">
            INSTAGRAM
          </a>
        </div>
        <div className="contactBlock">
          <span className="contactIcon">
            {" "}
            <AiFillGithub size="4vh" id="contact-ico" />
          </span>
          <a href={userData.Contact.Github} className="contactBlockTxt">
            GITHUB
          </a>
        </div>
        <div className="contactBlock">
          <span className="contactIcon">
            {" "}
            <FaLinkedinIn size="4vh" id="contact-ico" />
          </span>
          <a href={userData.Contact.LinkedIn} className="contactBlockTxt">
            LINKEDIN
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
