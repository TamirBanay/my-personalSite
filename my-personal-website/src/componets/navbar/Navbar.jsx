import React from "react";
import { ScrollLink } from "react-scroll";
import { Link } from "react-scroll";
import { useEffect } from "react";
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
    <nav>
      <ul>
        <li className="name">Tamir Banay</li>
        {document.documentElement.clientWidth > 480 ? (
          <div className="routers">
            <Link to="main-projects" smooth={true} duration={500}>
              <li>Projects</li>
            </Link>

            <Link to="aboutMe-main" smooth={true} duration={500}>
              <li>About</li>
            </Link>
            <Link to="main-ContactMe" smooth={true} duration={500}>
              <li>Contact</li>
            </Link>
          </div>
        ) : (
          <div className="menu-icon">
            <img src={menuIcon} />
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
