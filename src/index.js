import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import './root.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </HashRouter>
);
