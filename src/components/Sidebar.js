import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import NewThread from "./NewThread";
import { useState } from "react";
const Sidebar = () => {
  // const showPopupBtn = document.getElementById("side-bar-newthread-btn");
  // const overlay = document.getElementById("overlay");
  // const popup = document.getElementById("popup");

  // showPopupBtn.addEventListener("click", () => {
  //   overlay.style.display = "block";
  //   popup.style.display = "block";
  // });

  // overlay.addEventListener("click", () => {
  //   closePopup();
  // });

  // function closePopup() {
  //   overlay.style.display = "none";
  //   popup.style.display = "none";
  // }
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    console.log("hello");
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    console.log("helloclose");
    setShowPopup(false);
  };

  return (
    <div className="side-bar">
      {showPopup && (
        <div>
          <div className="overlay" id="overlay" onClick={closePopup}></div>
          <div className="popup" id="popup">
            <div className="popup-content">
              <NewThread />
            </div>
          </div>
        </div>
      )}
      <div className="side-bar-options">
        <div className="side-bar-title">
          <span>
            <FontAwesomeIcon
              className="side-bar-title-icon"
              icon="fa-solid fa-house"
            />
          </span>
          {"    "}perplexity
        </div>
        <div
          className="side-bar-newthread-btn"
          id="side-bar-newthread-btn"
          onClick={togglePopup}
        >
          New Thread
          <div className="side-bar-icona">⌘</div>
          <div className="side-bar-icon">
            <FontAwesomeIcon icon="fa-solid fa-k" />
          </div>
        </div>
        <div className="side-bar-options-list">
          <Link className="side-bar-options-list-link" to="/">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> {"  "}Home
          </Link>
          <Link className="side-bar-options-list-link">
            <FontAwesomeIcon icon="fa-solid fa-compass" />
            {"  "}
            Discover
          </Link>
          <Link className="side-bar-options-list-link" to="/library">
            <FontAwesomeIcon icon="fa-solid fa-book" /> {"  "}Library
          </Link>
          <Link className="side-bar-options-list-link">
            <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
            {"  "}Login
          </Link>
        </div>
        <div className="side-bar-btn-div">
          <button className="side-bar-btn">Sign Up</button>
        </div>
      </div>
      <div className="side-bar-misc">
        <div className="side-bar-misc-gpt">
          <div>Try Pro</div>
          <p>
            Upgrade to Claude-2 or GPT-4, boost your Copilot uses, and upload
            more files.
          </p>
          <button>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> {"   "}Learn More
          </button>
        </div>
        <div className="side-bar-misc-download-div">
          <button>
            <FontAwesomeIcon icon="fa-solid fa-mobile-screen-button" />
            {"   "}
            Download
          </button>
          <div>
            <FontAwesomeIcon icon={faSquareTwitter} />

            {/* <FontAwesomeIcon icon="fa-free-brands fa-x-twitter" /> */}
          </div>
          <div>
            <FontAwesomeIcon icon={faDiscord} />
            {/* <FontAwesomeIcon icon="fa-free-brands fa-discord" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
