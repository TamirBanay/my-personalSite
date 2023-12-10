import React from "react";
import "./Menu.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { Link, animateScroll as scroll } from "react-scroll";
import { scroller } from "react-scroll";

import { _menuIsOpen } from "../../services/atom";
function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useRecoilState(_menuIsOpen);
  const moveToLinkEdin = () => {
    window.location.href = "https://www.linkedin.com/in/tamir-banay-0436b31b2/";
  };
  const moveToMail = () => {
    window.location.href = "mailto:banay9329@gmail.com";
  };
  const moveToGithub = () => {
    window.location.href = "https://github.com/TamirBanay";
  };
  const handleCloseMenuAndScroll = (target) => {
    setMenuIsOpen(false);
    scroller.scrollTo(target, {
      duration: 500,
      smooth: true,
      offset: -70, // Adjust as needed
    });
  };

  const handleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <div className="main-menu">
      <div className="background-menu" />
      <div className="all-info-menu">
        <div className="header-menu">
          <div className="icon-X-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={handleMenuIsOpen}
            >
              <path
                d="M20.7803 4.28033C21.0732 3.98744 21.0732 3.51256 20.7803 3.21967C20.4874 2.92678 20.0126 2.92678 19.7197 3.21967L12 10.9393L4.28033 3.21967C3.98744 2.92678 3.51256 2.92678 3.21967 3.21967C2.92678 3.51256 2.92678 3.98744 3.21967 4.28033L10.9393 12L3.21967 19.7197C2.92678 20.0126 2.92678 20.4874 3.21967 20.7803C3.51256 21.0732 3.98744 21.0732 4.28033 20.7803L12 13.0607L19.7197 20.7803C20.0126 21.0732 20.4874 21.0732 20.7803 20.7803C21.0732 20.4874 21.0732 20.0126 20.7803 19.7197L13.0607 12L20.7803 4.28033Z"
                fill="#344054"
              />
            </svg>
          </div>
        </div>
        <div className="menu-data">
          <div>
            <ul className="list-menu">
              <li onClick={() => handleCloseMenuAndScroll("main-intro")}>
                Home
              </li>
              <li onClick={() => handleCloseMenuAndScroll("main-projects")}>
                My Projects
              </li>
              <li onClick={() => handleCloseMenuAndScroll("aboutMe-main")}>
                About Me
              </li>
              <li onClick={() => handleCloseMenuAndScroll("main-ContactMe")}>
                Contact Me
              </li>
            </ul>
          </div>
          <div className="iconsAndCopyright-menu">
            <div className="icons">
              <svg
                onClick={moveToGithub}
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
              >
                <use width="48" height="48" />

                <g clipPath="url(#clip0_63_410)">
                  <path
                    d="M19 0C8.46364 0 0 8.61528 0 19.4705C0 28.0858 5.52727 35.3227 12.9545 37.9072C13.8182 38.0795 14.3364 37.5626 14.3364 37.0457C14.3364 36.5288 14.3364 34.978 14.3364 33.4273C8.98182 34.4611 7.94545 31.015 7.94545 31.015C7.08182 28.775 5.87273 28.0858 5.87273 28.0858C4.14545 26.8797 6.04545 26.8797 6.04545 26.8797C7.94545 27.052 8.98182 28.9473 8.98182 28.9473C10.7091 31.8765 13.4727 31.015 14.5091 30.4981C14.6818 29.292 15.2 28.4304 15.7182 27.9135C11.2273 27.5689 6.90909 25.8458 6.90909 18.4367C6.90909 16.369 7.6 14.646 8.80909 13.2675C8.63636 12.7506 7.94545 10.683 8.98182 8.09836C8.98182 8.09836 10.5364 7.58145 14.1636 10.166C15.7182 9.64912 17.2727 9.47681 19 9.47681C20.5545 9.47681 22.2818 9.64912 23.8364 10.166C27.4636 7.58145 29.0182 8.09836 29.0182 8.09836C30.0545 10.8553 29.3636 12.7506 29.1909 13.2675C30.4 14.646 31.0909 16.369 31.0909 18.4367C31.0909 25.8458 26.6 27.5689 22.4545 28.0858C23.1455 28.775 23.6636 29.8089 23.6636 31.7042C23.6636 34.2888 23.6636 36.3565 23.6636 37.0457C23.6636 37.5626 24.0091 38.2519 25.0455 37.9072C32.6455 35.3227 38 28.0858 38 19.4705C38 8.61528 29.5364 0 19 0Z"
                    fill="#344054"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_63_410">
                    <rect width="38" height="38" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                onClick={moveToLinkEdin}
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
              >
                <path
                  d="M0 2.72175C0 1.21837 1.24925 0 2.79062 0H35.2094C36.7507 0 38 1.21837 38 2.72175V35.2783C38 36.7816 36.7507 38 35.2094 38H2.79062C1.24925 38 0 36.7816 0 35.2783V2.72175ZM11.7396 31.8108V14.6514H6.03725V31.8108H11.7396ZM8.88963 12.3073C10.8775 12.3073 12.1149 10.9915 12.1149 9.34325C12.0792 7.65938 10.8799 6.37925 8.92762 6.37925C6.97538 6.37925 5.7 7.66175 5.7 9.34325C5.7 10.9915 6.93738 12.3073 8.85163 12.3073H8.88963ZM20.5461 31.8108V22.2276C20.5461 21.7146 20.5841 21.2016 20.7361 20.8359C21.147 19.8123 22.0851 18.7506 23.6621 18.7506C25.726 18.7506 26.5501 20.3229 26.5501 22.6314V31.8108H32.2525V21.9688C32.2525 16.6962 29.4405 14.2453 25.688 14.2453C22.6623 14.2453 21.3061 15.9078 20.5461 17.0786V17.138H20.5081C20.5207 17.1182 20.5334 17.0984 20.5461 17.0786V14.6514H14.8461C14.9174 16.2616 14.8461 31.8108 14.8461 31.8108H20.5461Z"
                  fill="#344054"
                />
              </svg>
              <svg
                onClick={moveToMail}
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="32"
                viewBox="0 0 42 32"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.13125 4.14667C0.395898 2.96865 1.04647 1.91683 1.97642 1.16349C2.90637 0.410143 4.06057 -8.13185e-05 5.25 1.2091e-08H36.75C37.9394 -8.13185e-05 39.0936 0.410143 40.0236 1.16349C40.9535 1.91683 41.6041 2.96865 41.8687 4.14667L21 17.104L0.13125 4.14667ZM0 7.192V26.136L15.2329 16.648L0 7.192ZM17.7476 18.2133L0.501375 28.952C0.927482 29.8648 1.60001 30.6358 2.44068 31.1754C3.28135 31.715 4.25558 32.001 5.25 32H36.75C37.7443 32.0002 38.7181 31.7136 39.5583 31.1736C40.3985 30.6335 41.0705 29.8622 41.496 28.9493L24.2498 18.2107L21 20.2293L17.7476 18.2107V18.2133ZM26.7671 16.6507L42 26.136V7.192L26.7671 16.648V16.6507Z"
                  fill="#344054"
                />
              </svg>
            </div>
            <div className="Copyright">Tamir Banay 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
