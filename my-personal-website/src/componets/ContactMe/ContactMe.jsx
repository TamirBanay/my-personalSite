import React from "react";
import "./ContactMe.css";
import { useState } from "react";
import LinkedinIcon from "../../images/icons/linkedinIcon.png";
import linkedinIconHover from "../../images/icons/linkedinIconHover.png";
import gitHubIcon from "../../images/icons/gitHubIcon.png";
import gitHubIconHover from "../../images/icons/gitHubIconHover.png";
import mailIcon from "../../images/icons/mailIcon.png";
import mailIconHover from "../../images/icons/mailIconHover.png";
function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [currentGitHubIcon, setCurrentGitHubIcon] = useState(gitHubIcon);
  const [currentMailIcon, setCurrentMailIcon] = useState(mailIcon);
  const [currentLinkedinIcon, setCurrentIcon] = useState(LinkedinIcon);

  const moveToLinkEdin = () => {
    window.location.href = "https://www.linkedin.com/in/tamir-banay-0436b31b2/";
  };
  const moveToMail = () => {
    window.location.href = "mailto:banay9329@gmail.com";
  };
  const moveToGithub = () => {
    window.location.href = "https://github.com/TamirBanay";
  };

  const handleMouseEnter = () => {
    setCurrentIcon(linkedinIconHover);
  };

  const handleMouseLeave = () => {
    setCurrentIcon(LinkedinIcon);
  };
  const handleGitHubMouseEnter = () => {
    setCurrentGitHubIcon(gitHubIconHover);
  };

  const handleGitHubMouseLeave = () => {
    setCurrentGitHubIcon(gitHubIcon);
  };

  const handleMailMouseEnter = () => {
    setCurrentMailIcon(mailIconHover);
  };

  const handleMailMouseLeave = () => {
    setCurrentMailIcon(mailIcon);
  };
  return (
    <div className="main-ContactMe">
      <div className="ContactMe-title">
        Contact <span className="name-color"> Me</span>
      </div>
      <form
        className="form"
        action="https://formsubmit.co/ca11eae95733bae16ac1dc99f7d125f7 "
        method="POST"
      >
        <div className="ContactMe-inputs">
          <label>
            Name
            <input
              name="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              className="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button className="send-button" type="submit">
          Send
        </button>
      </form>
      <div className="iconsAndCopyright">
        <div className="icons">
          <img
            className="image-icon-git"
            src={currentGitHubIcon}
            onMouseEnter={handleGitHubMouseEnter}
            onMouseLeave={handleGitHubMouseLeave}
            onClick={moveToGithub}
          />
          <img
            className="image-icon-Linkedin"
            src={currentLinkedinIcon}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={moveToLinkEdin}
          />
          <img
            className="image-icon-mail"
            src={currentMailIcon}
            onMouseEnter={handleMailMouseEnter}
            onMouseLeave={handleMailMouseLeave}
            onClick={moveToMail}
          />
        </div>
        <div className="Copyright">Tamir Banay 2024</div>
      </div>
    </div>
  );
}

export default ContactMe;
