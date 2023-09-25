import "./Homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewThread from "./NewThread";
const Homepage = () => {
  return (
    <div className="home">
      <div className="home-main">
        <span className="home-heading">Where knowledge begins</span>
        <NewThread />
        <div className="home-main-footer">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" /> Try
            asking
          </span>
          <div className="home-main-buttons-div">
            <button>history of Argentina</button>
            <button>unique colorado flowers</button>
            <button>checkout time w hotel cdmx</button>
            <button>how to center a div</button>
            <button>brown dog name ideas</button>
            <button>healthy restaurants in sf</button>
            <button>d/dx x^2 y^4, d/dy x^2 y^4</button>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <button>Try Pro</button>
        <button>Careers</button>
        <button>FAQ</button>
        <button>Labs</button>
        <button>Blog</button>
        <button>Privacy</button>
        <button>Terms</button>
      </div>
    </div>
  );
};

export default Homepage;
