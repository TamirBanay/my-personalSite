import React from "react";
import "./MySkills.css";
import backendImg from "./skillsImages/backendImg.png";
import frontendImg from "./skillsImages/fronendImg.png";
import programingImg from "./skillsImages/programingImg.png";

function MySkills() {
  return (
    <div className="mySkills-main">
      <div className="mySkills-main-title">
        My <span className="name-color">Skills</span>
      </div>

      <div className="boxs">
        <div className="mySkills-boxs">
          <img className="mySkills-img" src={backendImg} />
          <div className="mySkills-title">FrontEnd</div>
          <div className="mySkills-list">
            <li>REACT</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>MUI</li>
            <li>BOOTSTRAP</li>
          </div>
        </div>
        <div className="mySkills-boxs">
          <img className="mySkills-img" src={frontendImg} />
          <div className="mySkills-title">BackEnd</div>
          <div className="mySkills-list">
            <li>DJANGO&REST</li>
            <li>NODE JS</li>
            <li>EXPRESS</li>
            <li>MySQL</li>
          </div>
        </div>
        <div className="mySkills-boxs">
          <img className="mySkills-img" src={programingImg} />
          <div className="mySkills-title">Programing Language</div>
          <div className="mySkills-list">
            <li>PYTHON</li>
            <li>JAVA</li>
            <li>JAVA-SCRIPT</li>
            <li>C / C++</li>
            <li>ASSEMBLY</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
