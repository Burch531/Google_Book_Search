import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron text-center">
        <h1>Google Books Search</h1>
      {children}
    </div>
  );
}

export default Jumbotron;