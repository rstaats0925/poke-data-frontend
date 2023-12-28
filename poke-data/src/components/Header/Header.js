import "./Header.css";
import { React } from "react";
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
      <select className="Header__dropdown" id="generations" name="generations">
        <option className="dropdown__option">Choose Filter</option>
        <option className="dropdown__option" value="all">
          All
        </option>
        <option className="dropdown__option" value="1">
          Generation 1
        </option>
        <option className="dropdown__option" value="2">
          Generation 2
        </option>
        <option className="dropdown__option" value="3">
          Generation 3
        </option>
        <option className="dropdown__option" value="4">
          Generation 4
        </option>
        <option className="dropdown__option" value="5">
          Generation 5
        </option>
        <option className="dropdown__option" value="6">
          Generation 6
        </option>
      </select>
      {/* <button className="Header__Go-button">Go!</button> */}
    </header>
  );
}

export default Header;
