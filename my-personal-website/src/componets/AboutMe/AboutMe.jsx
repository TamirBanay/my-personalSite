import React from "react";
import "./AboutMe.css";
import myCV from "../intro/Tamir-Banay-FS&Front-end.pdf";
import myimgBlue from "../../images/myimgBlue.png";
function AboutMe() {
  // Component code
  return (
    <div className="aboutMe-main">
      <img className="aboutMe-img" src={myimgBlue} />
      <div className="aboutMe-text">
        <div className="aboutMe-text-title">
          About <span className="name-color">Me</span>
        </div>
        <div className="aboutMe-text-description">
          I'm Tamir Banay, a Full Stack / BackEnd / FrontEnd Developer with a
          passion for coding and innovation, eager to grow as a junior developer
          in a dynamic environment.
        </div>
        <div className="aboutMe-text-description-sec">
          With a computer science degree and full-stack expertise, I'm seeking a
          role where I can grow and innovate alongside a forward-thinking team.
          Connect with me for dedication to tech and teamwork.
        </div>
        <div className="button-cv-aboutme">
          <a href={myCV} download="Tamir Banay CV.pdf">
            <button className="aboutMe-text-button">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
