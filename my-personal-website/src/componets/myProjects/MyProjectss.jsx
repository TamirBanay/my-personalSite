import React from "react";
import "./MyProjects.css";
import myMovieAppImg from "./projectImg/myMovieAppImg.png";
import alermSystemImg from "./projectImg/alermSystemImg.png";
import DataBaseImg from "./projectImg/DataBaseImg.png";
import PayWiseImg from "./projectImg/PayWiseImg.png";
function myProjects() {
  const moveToMyMoviesApp = () => {
    window.location.href = "https://github.com/TamirBanay/My-Movie-App";
  };
  const moveToPayWise = () => {
    window.location.href =
      "https://github.com/TamirBanay/PayWise-Digital-Wallet";
  };
  const moveToDatabaseSystemTask = () => {
    window.location.href = "https://github.com/TamirBanay/Database-System-task";
  };
  const moveToAlermSystem = () => {
    window.location.href = "https://github.com/TamirBanay/-Alerm-system";
  };

  return (
    <div className="main-projects">
      <div className="project-main-title">
        My <span className="name-color">Projects</span>
      </div>

      <div className="project">
        <div className="project-text">
          <div className="project-title">My Movie App</div>
          <div className="project-description">
            The Movie Explorer App combines React and Django to offer users an
            interactive platform for exploring movies, featuring detailed
            information and user profile management.
          </div>
          <div className="Button-git">
            <button className="prject-link" onClick={moveToMyMoviesApp}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M12.4407 0.5C5.78613 0.5 0.440674 5.94123 0.440674 12.7972C0.440674 18.2384 3.93158 22.809 8.62249 24.4414C9.16795 24.5502 9.49522 24.2238 9.49522 23.8973C9.49522 23.5708 9.49522 22.5914 9.49522 21.612C6.1134 22.2649 5.45886 20.0884 5.45886 20.0884C4.9134 18.6737 4.14977 18.2384 4.14977 18.2384C3.05886 17.4766 4.25886 17.4766 4.25886 17.4766C5.45886 17.5855 6.1134 18.7825 6.1134 18.7825C7.20431 20.6326 8.94976 20.0884 9.60431 19.762C9.7134 19.0002 10.0407 18.4561 10.3679 18.1296C7.53158 17.9119 4.80431 16.8237 4.80431 12.1442C4.80431 10.8383 5.24067 9.75009 6.00431 8.8795C5.89522 8.55302 5.45886 7.24713 6.1134 5.61476C6.1134 5.61476 7.09522 5.28828 9.38613 6.92065C10.3679 6.59418 11.3498 6.48535 12.4407 6.48535C13.4225 6.48535 14.5134 6.59418 15.4952 6.92065C17.7861 5.28828 18.7679 5.61476 18.7679 5.61476C19.4225 7.35595 18.9861 8.55302 18.877 8.8795C19.6407 9.75009 20.077 10.8383 20.077 12.1442C20.077 16.8237 17.2407 17.9119 14.6225 18.2384C15.0589 18.6737 15.3861 19.3267 15.3861 20.5237C15.3861 22.1561 15.3861 23.462 15.3861 23.8973C15.3861 24.2238 15.6043 24.6591 16.2589 24.4414C21.0589 22.809 24.4407 18.2384 24.4407 12.7972C24.4407 5.94123 19.0952 0.5 12.4407 0.5Z"
                  fill="#181616"
                />
              </svg>
              View Project
            </button>
          </div>
        </div>
        <img className="project-img-left" src={myMovieAppImg} />
      </div>

      {/* --------------------------------------------- */}
      {document.documentElement.clientWidth > 480 ? (
        <div className="project">
          <img className="project-img" src={PayWiseImg} />
          <div className="project-text">
            <div className="project-title">PayWise Digital Wallet</div>
            <div className="project-description">
              PayWise: Centralized digital wallet for refunds, vouchers, and
              discounts. Powered by React and Django, redefining financial
              management. Your feedback and contributions are valued.
            </div>
            <div className="Button-git">
              <button className="prject-link" onClick={moveToPayWise}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M12.4407 0.5C5.78613 0.5 0.440674 5.94123 0.440674 12.7972C0.440674 18.2384 3.93158 22.809 8.62249 24.4414C9.16795 24.5502 9.49522 24.2238 9.49522 23.8973C9.49522 23.5708 9.49522 22.5914 9.49522 21.612C6.1134 22.2649 5.45886 20.0884 5.45886 20.0884C4.9134 18.6737 4.14977 18.2384 4.14977 18.2384C3.05886 17.4766 4.25886 17.4766 4.25886 17.4766C5.45886 17.5855 6.1134 18.7825 6.1134 18.7825C7.20431 20.6326 8.94976 20.0884 9.60431 19.762C9.7134 19.0002 10.0407 18.4561 10.3679 18.1296C7.53158 17.9119 4.80431 16.8237 4.80431 12.1442C4.80431 10.8383 5.24067 9.75009 6.00431 8.8795C5.89522 8.55302 5.45886 7.24713 6.1134 5.61476C6.1134 5.61476 7.09522 5.28828 9.38613 6.92065C10.3679 6.59418 11.3498 6.48535 12.4407 6.48535C13.4225 6.48535 14.5134 6.59418 15.4952 6.92065C17.7861 5.28828 18.7679 5.61476 18.7679 5.61476C19.4225 7.35595 18.9861 8.55302 18.877 8.8795C19.6407 9.75009 20.077 10.8383 20.077 12.1442C20.077 16.8237 17.2407 17.9119 14.6225 18.2384C15.0589 18.6737 15.3861 19.3267 15.3861 20.5237C15.3861 22.1561 15.3861 23.462 15.3861 23.8973C15.3861 24.2238 15.6043 24.6591 16.2589 24.4414C21.0589 22.809 24.4407 18.2384 24.4407 12.7972C24.4407 5.94123 19.0952 0.5 12.4407 0.5Z"
                    fill="#181616"
                  />
                </svg>
                View Project
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="project">
          <div className="project-text">
            <div className="project-title">PayWise Digital Wallet</div>
            <div className="project-description">
              PayWise: Centralized digital wallet for refunds, vouchers, and
              discounts. Powered by React and Django, redefining financial
              management. Your feedback and contributions are valued.
            </div>
            <div className="Button-git">
              <button className="prject-link" onClick={moveToPayWise}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M12.4407 0.5C5.78613 0.5 0.440674 5.94123 0.440674 12.7972C0.440674 18.2384 3.93158 22.809 8.62249 24.4414C9.16795 24.5502 9.49522 24.2238 9.49522 23.8973C9.49522 23.5708 9.49522 22.5914 9.49522 21.612C6.1134 22.2649 5.45886 20.0884 5.45886 20.0884C4.9134 18.6737 4.14977 18.2384 4.14977 18.2384C3.05886 17.4766 4.25886 17.4766 4.25886 17.4766C5.45886 17.5855 6.1134 18.7825 6.1134 18.7825C7.20431 20.6326 8.94976 20.0884 9.60431 19.762C9.7134 19.0002 10.0407 18.4561 10.3679 18.1296C7.53158 17.9119 4.80431 16.8237 4.80431 12.1442C4.80431 10.8383 5.24067 9.75009 6.00431 8.8795C5.89522 8.55302 5.45886 7.24713 6.1134 5.61476C6.1134 5.61476 7.09522 5.28828 9.38613 6.92065C10.3679 6.59418 11.3498 6.48535 12.4407 6.48535C13.4225 6.48535 14.5134 6.59418 15.4952 6.92065C17.7861 5.28828 18.7679 5.61476 18.7679 5.61476C19.4225 7.35595 18.9861 8.55302 18.877 8.8795C19.6407 9.75009 20.077 10.8383 20.077 12.1442C20.077 16.8237 17.2407 17.9119 14.6225 18.2384C15.0589 18.6737 15.3861 19.3267 15.3861 20.5237C15.3861 22.1561 15.3861 23.462 15.3861 23.8973C15.3861 24.2238 15.6043 24.6591 16.2589 24.4414C21.0589 22.809 24.4407 18.2384 24.4407 12.7972C24.4407 5.94123 19.0952 0.5 12.4407 0.5Z"
                    fill="#181616"
                  />
                </svg>
                View Project
              </button>
            </div>
          </div>
          <img className="project-img" src={PayWiseImg} />
        </div>
      )}

      {/* --------------------------------------------- */}
      <div className="project">
        <div className="project-text">
          <div className="project-title">Database System</div>
          <div className="project-description">
            This project integrates Java and MySQL with the Sakila Database,
            featuring built-in SQL credentials, efficient connectors, and
            real-time database interaction.
          </div>
          <div className="Button-git">
            <button className="prject-link" onClick={moveToDatabaseSystemTask}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M12.4407 0.5C5.78613 0.5 0.440674 5.94123 0.440674 12.7972C0.440674 18.2384 3.93158 22.809 8.62249 24.4414C9.16795 24.5502 9.49522 24.2238 9.49522 23.8973C9.49522 23.5708 9.49522 22.5914 9.49522 21.612C6.1134 22.2649 5.45886 20.0884 5.45886 20.0884C4.9134 18.6737 4.14977 18.2384 4.14977 18.2384C3.05886 17.4766 4.25886 17.4766 4.25886 17.4766C5.45886 17.5855 6.1134 18.7825 6.1134 18.7825C7.20431 20.6326 8.94976 20.0884 9.60431 19.762C9.7134 19.0002 10.0407 18.4561 10.3679 18.1296C7.53158 17.9119 4.80431 16.8237 4.80431 12.1442C4.80431 10.8383 5.24067 9.75009 6.00431 8.8795C5.89522 8.55302 5.45886 7.24713 6.1134 5.61476C6.1134 5.61476 7.09522 5.28828 9.38613 6.92065C10.3679 6.59418 11.3498 6.48535 12.4407 6.48535C13.4225 6.48535 14.5134 6.59418 15.4952 6.92065C17.7861 5.28828 18.7679 5.61476 18.7679 5.61476C19.4225 7.35595 18.9861 8.55302 18.877 8.8795C19.6407 9.75009 20.077 10.8383 20.077 12.1442C20.077 16.8237 17.2407 17.9119 14.6225 18.2384C15.0589 18.6737 15.3861 19.3267 15.3861 20.5237C15.3861 22.1561 15.3861 23.462 15.3861 23.8973C15.3861 24.2238 15.6043 24.6591 16.2589 24.4414C21.0589 22.809 24.4407 18.2384 24.4407 12.7972C24.4407 5.94123 19.0952 0.5 12.4407 0.5Z"
                  fill="#181616"
                />
              </svg>
              View Project
            </button>
          </div>
        </div>
        <img className="project-img-left" src={DataBaseImg} />
      </div>
      {/* --------------------------------------------- */}
      {document.documentElement.clientWidth > 480 ? (
        <div className="project">
          <img className="project-img" src={alermSystemImg} />
          <div className="project-text">
            <div className="project-title">Alarm System</div>
            <div className="project-description">
              The Home Alert System features an ESP8266 microcontroller and LED
              strip for visual emergency alerts, designed for the deaf
              community. It offers easy setup, web-based city customization, and
              improved safety.
            </div>
            <div className="Button-git">
              <button className="prject-link" onClick={moveToAlermSystem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M12.4407 0.5C5.78613 0.5 0.440674 5.94123 0.440674 12.7972C0.440674 18.2384 3.93158 22.809 8.62249 24.4414C9.16795 24.5502 9.49522 24.2238 9.49522 23.8973C9.49522 23.5708 9.49522 22.5914 9.49522 21.612C6.1134 22.2649 5.45886 20.0884 5.45886 20.0884C4.9134 18.6737 4.14977 18.2384 4.14977 18.2384C3.05886 17.4766 4.25886 17.4766 4.25886 17.4766C5.45886 17.5855 6.1134 18.7825 6.1134 18.7825C7.20431 20.6326 8.94976 20.0884 9.60431 19.762C9.7134 19.0002 10.0407 18.4561 10.3679 18.1296C7.53158 17.9119 4.80431 16.8237 4.80431 12.1442C4.80431 10.8383 5.24067 9.75009 6.00431 8.8795C5.89522 8.55302 5.45886 7.24713 6.1134 5.61476C6.1134 5.61476 7.09522 5.28828 9.38613 6.92065C10.3679 6.59418 11.3498 6.48535 12.4407 6.48535C13.4225 6.48535 14.5134 6.59418 15.4952 6.92065C17.7861 5.28828 18.7679 5.61476 18.7679 5.61476C19.4225 7.35595 18.9861 8.55302 18.877 8.8795C19.6407 9.75009 20.077 10.8383 20.077 12.1442C20.077 16.8237 17.2407 17.9119 14.6225 18.2384C15.0589 18.6737 15.3861 19.3267 15.3861 20.5237C15.3861 22.1561 15.3861 23.462 15.3861 23.8973C15.3861 24.2238 15.6043 24.6591 16.2589 24.4414C21.0589 22.809 24.4407 18.2384 24.4407 12.7972C24.4407 5.94123 19.0952 0.5 12.4407 0.5Z"
                    fill="#181616"
                  />
                </svg>
                View Project
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="project">
          <div className="project-text">
            <div className="project-title">Alarm System</div>
            <div className="project-description">
              The Home Alert System uses an ESP8266 and LED strip for visual
              alerts, catering to the deaf community with web-based
              customization and easy setup for improved safety.
            </div>
            <div className="Button-git">
              <button className="prject-link" onClick={moveToAlermSystem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M12.4407 0.5C5.78613 0.5 0.440674 5.94123 0.440674 12.7972C0.440674 18.2384 3.93158 22.809 8.62249 24.4414C9.16795 24.5502 9.49522 24.2238 9.49522 23.8973C9.49522 23.5708 9.49522 22.5914 9.49522 21.612C6.1134 22.2649 5.45886 20.0884 5.45886 20.0884C4.9134 18.6737 4.14977 18.2384 4.14977 18.2384C3.05886 17.4766 4.25886 17.4766 4.25886 17.4766C5.45886 17.5855 6.1134 18.7825 6.1134 18.7825C7.20431 20.6326 8.94976 20.0884 9.60431 19.762C9.7134 19.0002 10.0407 18.4561 10.3679 18.1296C7.53158 17.9119 4.80431 16.8237 4.80431 12.1442C4.80431 10.8383 5.24067 9.75009 6.00431 8.8795C5.89522 8.55302 5.45886 7.24713 6.1134 5.61476C6.1134 5.61476 7.09522 5.28828 9.38613 6.92065C10.3679 6.59418 11.3498 6.48535 12.4407 6.48535C13.4225 6.48535 14.5134 6.59418 15.4952 6.92065C17.7861 5.28828 18.7679 5.61476 18.7679 5.61476C19.4225 7.35595 18.9861 8.55302 18.877 8.8795C19.6407 9.75009 20.077 10.8383 20.077 12.1442C20.077 16.8237 17.2407 17.9119 14.6225 18.2384C15.0589 18.6737 15.3861 19.3267 15.3861 20.5237C15.3861 22.1561 15.3861 23.462 15.3861 23.8973C15.3861 24.2238 15.6043 24.6591 16.2589 24.4414C21.0589 22.809 24.4407 18.2384 24.4407 12.7972C24.4407 5.94123 19.0952 0.5 12.4407 0.5Z"
                    fill="#181616"
                  />
                </svg>
                View Project
              </button>
            </div>
          </div>
          <img className="project-img" src={alermSystemImg} />
        </div>
      )}
    </div>
  );
}

export default myProjects;
