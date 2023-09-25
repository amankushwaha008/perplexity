import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faFontAwesome as faFontAwesomebr,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab, faFontAwesome, faFontAwesomebr, faTwitterSquare);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
