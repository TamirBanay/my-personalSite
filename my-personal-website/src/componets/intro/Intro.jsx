import React from "react";
import myImg from "../../images/image.png";
import myImgMobile from "../../images/image-mobile.png";
import "./Intro.css";
import { useEffect } from "react";
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
          </div>
          <div className="buttons">
            <button className="cvButton">Download CV</button>
            <button className="linkedinButton">LinkedIns</button>
          </div>
        </div>
      </div>
      <img className="img-rigth" src={screenSize > 480 ? myImg : myImgMobile} />
    </div>
  );
}

export default Intro;
