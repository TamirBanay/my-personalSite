import React from "react";
import { ScrollLink } from "react-scroll";
import { Link } from "react-scroll";
import "./Navbar.css";
function Navbar() {
  // Component code
  return (
    <nav>
      <ul >
        <li className="name">
          {/* <a href={myCV} download="Tamir Banay CV.pdf"> */}
          Tamir Banay {/* </a> */}
        </li>
        <div className="routers">
          <Link to="projects" smooth={true} duration={500}>
            <li>Projects</li>
          </Link>

          <Link to="about-contaoner" smooth={true} duration={500}>
            <li>About</li>
          </Link>
          <Link to="main-skills-contaoner" smooth={true} duration={500}>
            <li>Contact</li>
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
