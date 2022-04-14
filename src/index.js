import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/modeContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </Router>
  </StrictMode>,
  rootElement
);
