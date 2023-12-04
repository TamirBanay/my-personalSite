import React from "react";
import "./Footer.css";
import footerImg from "./FooterImages/footrerImg.png";
import footerImgMobile from "./FooterImages/footerImgMobile.png";

function Footer() {
  return (
    <div>
      {document.documentElement.clientWidth > 480 ? (
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
