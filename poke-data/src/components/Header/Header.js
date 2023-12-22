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
      <select className="Header__dropdown" id="generations">
        <option className="dropdown__option">Choose Filter</option>
        <option className="dropdown__option">All</option>
        <option className="dropdown__option">Generation 1</option>
        <option className="dropdown__option">Generation 2</option>
        <option className="dropdown__option">Generation 3</option>
        <option className="dropdown__option">Generation 4</option>
        <option className="dropdown__option">Generation 5</option>
        <option className="dropdown__option">Generation 6</option>
      </select>
      {/* <button className="Header__Go-button">Go!</button> */}
    </header>
  );
}

export default Header;
