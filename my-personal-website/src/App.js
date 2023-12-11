import "./App.css";
import Navbar from "./componets/navbar/Navbar";
import Intro from "./componets/intro/Intro";
import MyProjects from "./componets/myProjects/MyProjectss";
import AboutMe from "./componets/AboutMe/AboutMe";
import ContactMe from "./componets/ContactMe/ContactMe";
import Myskills from "./componets/mySkills/Myskills";
import Footer from "./componets/Footer/Footer";
import MobileMenu from "./componets/Menu/MobileMenu";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { _menuIsOpen } from "./services/atom";
import React, { useState, useRef } from "react";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useRecoilState(_menuIsOpen);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);
  const handleTouchStart = (e) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 30; // Minimum distance of the swipe to trigger action
    const swipeRight =
      touchEndRef.current > touchStartRef.current + swipeThreshold;
    const swipeLeft =
      touchStartRef.current > touchEndRef.current + swipeThreshold;

    if (swipeRight && menuIsOpen) {
      setMenuIsOpen(false); // Close the menu on swipe right
    } else if (swipeLeft && !menuIsOpen) {
      setMenuIsOpen(true); // Open the menu on swipe left
    }
  };
  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="App"
    >
      {menuIsOpen && <MobileMenu />}
      <div className={menuIsOpen ? "hidden-background" : ""}>
        <Navbar />
        <Intro />
        <MyProjects />
        <AboutMe />
        <Myskills />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
