import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "./store/Provider";

createRoot(document.querySelector("#root")).render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>
);
