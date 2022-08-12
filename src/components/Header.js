import React, { useState } from "react";
import { Link } from "react-scroll";
import "./styles.css";

function Header() {
  const portfolio = "Portfolio.";
  const name = "Sushmitha";
  const [header, setHeader] = useState(false);
  const changeHeader = () => {
    if (window.scrollY >= 800) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeHeader);

  return (
    <div className="header">
      <span className="portfolio">{header ? name : portfolio}</span>
      <div className="allHeaderLinks">
        <Link
          to="homeNav"
          smooth={true}
          spy={true}
          duration={500}
          className="headerLinks"
        >
          Home
        </Link>
        <Link
          to="aboutNav"
          smooth={true}
          spy={true}
          duration={500}
          className="headerLinks"
        >
          About
        </Link>
        <Link
          to="projectNav"
          smooth={true}
          spy={true}
          duration={500}
          className="headerLinks"
        >
          Projects
        </Link>
        <Link
          to="eduNav"
          smooth={true}
          spy={true}
          duration={500}
          className="headerLinks"
        >
          Education
        </Link>
        <Link
          to="contactNav"
          smooth={true}
          spy={true}
          duration={500}
          className="headerLinks"
        >
          Timeline
        </Link>
        <Link
          to="contactNav"
          smooth={true}
          spy={true}
          duration={500}
          className="headerLinks"
        >
          Contact{" "}
        </Link>
      </div>
    </div>
  );
}

export default Header;
