import React from "react";
import "./Footer.css";
import footerImg from "./FooterImages/footrerImg.png";
import footerImgMobile from "./FooterImages/footerImgMobile.png";
import { _screenSize } from "../../services/atom";
import { useRecoilState } from "recoil";

function Footer() {
  const [screenSize, setScreenSize] = useRecoilState(_screenSize);

  return (
    <div>
      {screenSize > 480 ? (
        <div className="footerImg-container">
          <img src={footerImg} className="footerImg" />
        </div>
      ) : (
        <div className="footerImg-container-mobile">
          <img className="footerImgMobile" src={footerImgMobile} />
        </div>
      )}
    </div>
  );
}

export default Footer;
