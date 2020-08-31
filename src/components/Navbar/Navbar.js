import React from "react";
//import logo from "../../img/logo.png";
//import logo from "../../../public/img/logo.png";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="./img/logo.png" alt="pobles penedes logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            pobles
          </a>
        </li>
      </ul>
    </nav>
  );
}
