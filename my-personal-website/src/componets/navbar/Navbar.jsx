import React from "react";
import { ScrollLink } from "react-scroll";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { useRecoilState } from "recoil";
import { _screenSize, _menuIsOpen } from "../../services/atom";
import menuIcon from "../../images/Vector.png";
import MobileMenu from "../Menu/MobileMenu";
function Navbar() {
  const [screenSize, setScreenSize] = useRecoilState(_screenSize);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useRecoilState(_menuIsOpen);

  const handleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };
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
    <nav
      className={menuIsOpen ? "menuOpen" : hasScrolled ? "nav-scrolled" : ""}
    >
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
        {screenSize > 480 ? (
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
          <div className="menu-icon">
            {<img src={menuIcon} onClick={handleMenuIsOpen} />}
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
