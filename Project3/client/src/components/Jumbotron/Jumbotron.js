import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 100, clear: "both", paddingTop: 25, textAlign: "center" }}
    className="TunedIn"
  >
    {children}
  </div>
);

export default Jumbotron;
