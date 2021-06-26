import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import "./styles/styles.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
