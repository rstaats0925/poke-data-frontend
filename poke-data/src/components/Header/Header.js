import "./Header.css";
import { React } from "react";
// import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="Header">
      {/* <Navigation /> */}
      {/* <Link className="Header__logo" to="/">
        <h1 className="Header__logo">PokeData</h1>
      </Link> */}
      {/* <Link className="Header__explore-link" to="/cardContainer">
        Explore Pokemon
      </Link> */}
      {/* <button className="Header__Go-button">Go!</button> */}
    </header>
  );
}

export default Header;
