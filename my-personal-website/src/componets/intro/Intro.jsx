import React from "react";
import myImg from "../../images/newImg.png";
import myImgMobile from "../../images/newImgMobile.png";
import "./Intro.css";
import { useEffect } from "react";
import myCV from "./Tamir-Banay-FS&Front-end.pdf";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { _screenSize } from "../../services/atom";
function Intro() {
  const [screenSize, setScreenSize] = useRecoilState(_screenSize);

  const updateScreenSize = () => {
    const newWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    setScreenSize(newWidth);
  };
  const moveToMail = () => {
    window.location.href = "mailto:banay9329@gmail.com";
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);
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
            <div className="intro-mail" onClick={moveToMail}>
              Email: <span className="name-color">banay9329@gmail.com</span>{" "}
            </div>
          </div>

          <div className="buttons">
            <a href={myCV} download="Tamir Banay CV.pdf">
              <button className="cvButton">Download CV</button>
            </a>
            <a href="https://www.linkedin.com/in/tamir-banay-0436b31b2/">
              <button type="" className="linkedinButton">
                LinkedIn
              </button>
            </a>
          </div>
        </div>
      </div>
      <img className="img-rigth" src={screenSize > 480 ? myImg : myImgMobile} />
    </div>
  );
}

export default Intro;
