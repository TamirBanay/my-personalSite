import React from "react";
import "./ContactMe.css";
import { useState } from "react";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const moveToLinkEdin = () => {
    window.location.href = "https://www.linkedin.com/in/tamir-banay-0436b31b2/";
  };
  const moveToMail = () => {
    window.location.href = "mailto:banay9329@gmail.com";
  };
  const moveToGithub = () => {
    window.location.href = "https://github.com/TamirBanay";
  };
  const moveToWhatsApp = () => {
    const phoneNumber = "0525908415"; // Your phone number in international format
    window.location.href = `https://wa.me/${phoneNumber}`;
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
          <svg
            onClick={moveToGithub}
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M30 24C30 25.1867 29.6481 26.3467 28.9888 27.3334C28.3295 28.3201 27.3925 29.0892 26.2961 29.5433C25.1997 29.9974 23.9933 30.1162 22.8295 29.8847C21.6656 29.6532 20.5965 29.0818 19.7574 28.2426C18.9182 27.4035 18.3468 26.3344 18.1153 25.1705C17.8838 24.0067 18.0026 22.8003 18.4567 21.7039C18.9108 20.6075 19.6799 19.6705 20.6666 19.0112C21.6533 18.3519 22.8133 18 24 18C25.5907 18.0018 27.1158 18.6346 28.2406 19.7594C29.3654 20.8842 29.9982 22.4093 30 24ZM42.75 15.75V32.25C42.7468 35.0338 41.6396 37.7027 39.6711 39.6711C37.7027 41.6396 35.0338 42.7468 32.25 42.75H15.75C12.9662 42.7468 10.2973 41.6396 8.32889 39.6711C6.36044 37.7027 5.25318 35.0338 5.25 32.25V15.75C5.25318 12.9662 6.36044 10.2973 8.32889 8.32889C10.2973 6.36044 12.9662 5.25318 15.75 5.25H32.25C35.0338 5.25318 37.7027 6.36044 39.6711 8.32889C41.6396 10.2973 42.7468 12.9662 42.75 15.75ZM33 24C33 22.22 32.4722 20.4799 31.4832 18.9999C30.4943 17.5198 29.0887 16.3663 27.4442 15.6851C25.7996 15.0039 23.99 14.8257 22.2442 15.1729C20.4984 15.5202 18.8947 16.3774 17.636 17.636C16.3774 18.8947 15.5202 20.4984 15.1729 22.2442C14.8257 23.99 15.0039 25.7996 15.6851 27.4442C16.3663 29.0887 17.5198 30.4943 18.9999 31.4832C20.4799 32.4722 22.22 33 24 33C26.3861 32.9973 28.6738 32.0482 30.361 30.361C32.0482 28.6738 32.9973 26.3861 33 24ZM36 14.25C36 13.805 35.868 13.37 35.6208 13C35.3736 12.63 35.0222 12.3416 34.611 12.1713C34.1999 12.001 33.7475 11.9564 33.311 12.0432C32.8746 12.13 32.4737 12.3443 32.159 12.659C31.8443 12.9737 31.63 13.3746 31.5432 13.811C31.4564 14.2475 31.501 14.6999 31.6713 15.111C31.8416 15.5222 32.13 15.8736 32.5 16.1208C32.87 16.368 33.305 16.5 33.75 16.5C34.3467 16.5 34.919 16.2629 35.341 15.841C35.7629 15.419 36 14.8467 36 14.25Z"
              fill="#25282B"
            />
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
              fill="#25282B"
            />
          </svg>
          <svg
            onClick={moveToMail}
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 42 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.13125 4.14667C0.395898 2.96865 1.04647 1.91683 1.97642 1.16349C2.90637 0.410143 4.06057 -8.13185e-05 5.25 1.2091e-08H36.75C37.9394 -8.13185e-05 39.0936 0.410143 40.0236 1.16349C40.9535 1.91683 41.6041 2.96865 41.8687 4.14667L21 17.104L0.13125 4.14667ZM0 7.192V26.136L15.2329 16.648L0 7.192ZM17.7476 18.2133L0.501375 28.952C0.927482 29.8648 1.60001 30.6358 2.44068 31.1754C3.28135 31.715 4.25558 32.001 5.25 32H36.75C37.7443 32.0002 38.7181 31.7136 39.5583 31.1736C40.3985 30.6335 41.0705 29.8622 41.496 28.9493L24.2498 18.2107L21 20.2293L17.7476 18.2107V18.2133ZM26.7671 16.6507L42 26.136V7.192L26.7671 16.648V16.6507Z"
              fill="#25282B"
            />
          </svg>
        </div>
        <div className="Copyright">Tamir Banay 2024</div>
      </div>
    </div>
  );
}

export default ContactMe;
