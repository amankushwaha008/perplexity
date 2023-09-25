import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./Root.css";
const Root = () => {
  return (
    <div className="root-per">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Root;
