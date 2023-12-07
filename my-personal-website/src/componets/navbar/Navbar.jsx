import React from "react";
import { ScrollLink } from "react-scroll";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import "./Navbar.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { _screenSize } from "../../services/atom";
import menuIcon from "../../images/Vector.png";

function Navbar() {
  const [screenSize, setScreenSize] = useRecoilState(_screenSize);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
    <nav className={hasScrolled ? "nav-scrolled" : ""}>
      <ul className={hasScrolled ? "ul-scrolled" : ""}>
        <li className="name">
          <Link
            to="main-intro"
            smooth={true}
            duration={500}
            className={
              hasScrolled ? "tamir-banay-link-scroll" : "tamir-banay-link"
            }
          >
            Tamir Banay
          </Link>
        </li>
        {document.documentElement.clientWidth > 480 ? (
          <div className={hasScrolled ? "routers-scrolled" : "routers"}>
            <li>
              <Link to="main-projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="aboutMe-main" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="main-ContactMe" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </div>
        ) : (
          <div className="menu-icon">{<img src={menuIcon} />}</div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
