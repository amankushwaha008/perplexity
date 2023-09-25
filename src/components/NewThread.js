import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToggleSwitch from "./ToggleSwitch";
import "./NewThread.css";
const NewThread = () => {
  return (
    <div className="new-thread-div">
      <textarea
        autofocus=""
        placeholder="Ask anything..."
        autocomplete="off"
      ></textarea>
      <button className="nt-focus">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> Focus
      </button>
      <button className="nt-file">
        <FontAwesomeIcon icon="fa-solid fa-circle-plus" /> File
      </button>
      <div className="nt-ts">
        <ToggleSwitch />
        <span className="copilot">Copilot</span>
      </div>
      <div className="nt-ts">
        <button className="nt-enter">
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default NewThread;
