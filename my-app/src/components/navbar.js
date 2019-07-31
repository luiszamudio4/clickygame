import React from "react";
import "../styles/Navbar.css";

function Navbar(props) {

  return (
    <nav className="navbar">
      <h3 className="nav-item">
      <span className="score">Your Score: {props.score}</span>
    </h3>
    <h3 className="nav-item">
      <span className="message">{props.message}</span>
    </h3>
    </nav>
  );
  }


export default Navbar;
