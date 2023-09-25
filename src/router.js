import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Homepage from "./components/Homepage";
import Libray from "./components/Library";
import Search from "./components/Search";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "search", element: <Search /> },
      { path: "library", element: <Libray /> },
    ],
  },
]);

export default router;
