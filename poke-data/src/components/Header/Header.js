import "./Header.css";
import { React } from "react";
// import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">PokeData</div>
      <Navigation />
      <button className="header__menu-btn" type="button"></button>
    </header>
  );
}

export default Header;
