import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <Link className="Header__logo" to="/">
        Poke-data
      </Link>
      <Link className="Header__explore-link" to="/cardContainer">
        Explore Pokemon
      </Link>
      <button className="Header__dropdown">Generation</button>
      <button className="Header__Go-button">Go!</button>
    </header>
  );
}

export default Header;
