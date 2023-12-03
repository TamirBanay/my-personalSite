import React from "react";
import myImg from "../../images/image.png";
import "./Intro.css";
function Intro() {
  // Component code
  return (
    <div className="main-intro">
      <div className="text-left">
        <div className="titels">Full Stack / BackEnd / FrontEnd Developer</div>
        <div className="all-text">
          <div className="first-text">
            Hello, my name is <span className="name-color">Tamir Banay</span>
          </div>
          <div className="about-intro">
            I'm Tamir Banay, a Full Stack / BackEnd / FrontEnd Developer with a
            passion for coding and innovation, eager to grow as a junior
            developer in a dynamic environment.
          </div>
          <div className="buttons">
            <button className="cvButton">Download CV</button>
            <button className="linkedinButton">LinkedIns</button>
          </div>
        </div>
      </div>
      <img className="img-rigth" src={myImg} />
    </div>
  );
}

export default Intro;
